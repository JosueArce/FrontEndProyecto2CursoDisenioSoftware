import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { SellersHandlerService } from './sellers.handler.service';
import { GlobalService } from './global-service.service';

@Injectable()
export class ProductHandlerService {

  public sellerRecords : ProductModel[];
  public productRecords : ProductModel[];
  public backUpProductRecrods : ProductModel[];
  public selectedProduct : ProductModel;
  public uploader : CloudinaryUploader;
  

  constructor(public http_request : Http_Requests, private globalHandler : GlobalService) {
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
  }

  public getProducts() : void{

  	this.http_request.getService('ProductosDisponibles')
  			.then(response => 
				{
					this.backUpProductRecrods = response[0];
					this.productRecords = response[0];

          this.globalHandler.user.subscribe({
            next : (user : any) => {
                for(let index = 0;index<this.productRecords.length;index++){
                  if(this.productRecords[index].idVendedor == user.id)
                    this.sellerRecords.push(this.productRecords[index]);
                }
            }
          });     
          
				}
			)
			.catch(error => 
				{
					//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
					console.log("Error: ",error)
				}
			)
  }

  public postProducts(newProduct : ProductModel) : void{
  	this.http_request.postService(newProduct,'insertarProducto')
  			.then(response => 
				{
					//this.onChange.emit({data : response.data});
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

  public getSelectedProduct(){
  	return this.selectedProduct;
  }

  public setSelectedProduct(newProduct){
  	 this.selectedProduct = newProduct;
  }

  public pushImageCloud(newProduct : ProductModel) : boolean{
  	this.uploader.uploadAll();

    this.uploader.onSuccessItem = 
    (item : any,response:string, status:number,headers:any):any=>
    {
      if(newProduct)
        newProduct.imagen = JSON.parse(response).url;
      else newProduct.imagen = "http://www.royallepagesudbury.ca/images/no-image.png";
     
      this.postProducts(newProduct);
      return true;
    };

    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
      return false;
    };

    return null;
  }

  public editImageProduct(newProduct : ProductModel){
    this.uploader.uploadAll();

    this.uploader.onSuccessItem = 
    (item : any,response:string, status:number,headers:any):any=>
    {
      if(newProduct.imagen == '')
        return JSON.parse(response).url;

      return false;
    };

    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
      return false;
    };

    return null;
  }


}
