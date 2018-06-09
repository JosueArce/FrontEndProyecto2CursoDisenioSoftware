import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { SellersHandlerService } from './sellers.handler.service';
import { GlobalService } from './global-service.service';
import { AuthService, SocialUser } from "angularx-social-login";

@Injectable()
export class ProductHandlerService {

  public sellerRecords : ProductModel[];
  public productRecords : ProductModel[];
  public backUpProductRecrods : ProductModel[];
  public selectedProduct : ProductModel;
  public uploader : CloudinaryUploader;
  private user : SocialUser;

  constructor(public http_request : Http_Requests, private globalHandler : GlobalService,private sellerHandler: SellersHandlerService) {
    this.productRecords = []; 
    this.backUpProductRecrods = [];
    this.sellerRecords = [];
  	this.selectedProduct = {
  		idProducto : 0,
  		producto : '',
  		descripcion: '',
  		existencia : 0,
  		precio : 0,
  		categoria : '',
  		duracionEnvio:0,
  		estado :  0,
  		imagen : '',
  		idVendedor : '',
      nComercio : '',
  		tarifaEnvio : 0,
      marca : ''
    };

    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({
        cloudName : 'ddzutuizv',
        uploadPreset : 'iwbl3gws'
      })
    );
    this.globalHandler.user.subscribe({
      next : (user : any) => {
        this.user = user;          
      }
    }); 
    setInterval(()=>this.getProducts(),1000); 
  }

  //obtiene los productos actuales
  public getProducts() : void{

  	this.http_request.getService('ProductosDisponibles')
  			.then(response => 
				{
					this.backUpProductRecrods = response[0];
					this.productRecords = response[0];
          this.sellerRecords = [];
 
          if(this.globalHandler.loggedIn){
              for(let index = 0;index<this.productRecords.length;index++){
                if(this.productRecords[index].idVendedor == this.user.id)
                  this.sellerRecords.push(this.productRecords[index]);
            }
          } 
          
				}
			)
			.catch(error => 
				{
					//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
					console.log("Error: ",error)
				}
			)
  }

  //inserta un nuevo registro
  public postProducts(newProduct : any) : void{
  	this.http_request.postService(newProduct,'insertarProducto')
  			.then(response => 
				{
          this.getProducts();
				}
			)
			.catch(error => 
				{
					//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
					console.log("Error: ",error)
				}
			)
  }

  //elimina el producto a partir de su ID
  public deleteProduct(parameterName:any){
    this.http_request.deleteService({ 'idProducto' : parameterName}, "eliminarProducto")
        .then(response => 
          {
            //ya sirve
            this.getProducts();
          }
        )
        .catch(error => console.log("Error: ",error))
  }

  //edita el producto
  public  editProduct(newProduct : any){
    this.http_request.putService(newProduct,'editarProducto')
      .then(response=>{
        console.log(response);
        this.getProducts();
      })
      .catch(error=> console.log("Error:",error))
  }

  public getSelectedProduct(){
  	return this.selectedProduct;
  }

  public setSelectedProduct(newProduct){
  	 this.selectedProduct = newProduct;
  }

  //permite insertar un nuevo registro producto
  public pushImageCloud(newProduct : ProductModel){
  	this.uploader.uploadAll();

    this.uploader.onSuccessItem = 
    (item : any,response:string, status:number,headers:any):any=>
    {
      if(newProduct)
        newProduct.imagen = JSON.parse(response).url;
      else newProduct.imagen = "http://www.royallepagesudbury.ca/images/no-image.png";
     
      this.postProducts(newProduct);
    };

    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
      return false;
    };

    return true;
  }

  //permite editar un producto existente
  public editImageProduct(newProduct : any){

    this.uploader.uploadAll();

    this.uploader.onSuccessItem = 
    (item : any,response:string, status:number,headers:any):any=>
    {
      if(newProduct.imagen != JSON.parse(response).url)
        newProduct.imagen = JSON.parse(response).url;

      this.editProduct(newProduct);//se llama al metodo que para que edite el producto en el servidor
      return true;
    };

    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
      return false;
    };
  }


}
