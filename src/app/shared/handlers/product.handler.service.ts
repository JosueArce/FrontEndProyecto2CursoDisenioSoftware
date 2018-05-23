import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';


@Injectable()
export class ProductHandlerService {

  public onChange : EventEmitter<any> = new EventEmitter();
  public productRecords : ProductModel[];
  public selectedProduct : ProductModel;
  public uploader : CloudinaryUploader;

  constructor(public http_request : Http_Requests) {
  	this.selectedProduct = {
  		idProducto : 0,
		producto : '',
		descripcion: '',
		existencia : 0,
		precio : 0,
		categoría : '',
		duracionEnvio:0,
		estado :  0,
		imagen : '',
		vendedor : '',
		tarifaEnvio : 0
  	};
    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({
        cloudName : 'ddzutuizv',
        uploadPreset : 'iwbl3gws'
      })
    );
  }

  public getProducts() : void{
  	this.http_request.getService('Productos')
  			.then(response => 
				{
					//this.onChange.emit({data : response});
					this.productRecords = response;
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
  	this.http_request.postService(newProduct,'insertProducts')
  			.then(response => 
				{
					this.onChange.emit({data : response.data});
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

  public pushImageCloud(newImage):void{
  	this.uploader.uploadAll();

    this.uploader.onSuccessItem = 
    (item : any,response:string, status:number,headers:any):any=>
    {
      console.log(response);
    };

    this.uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
  }

  public getImageCloud(imagen) : string{
  	return null;
  }

  

}
