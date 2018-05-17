import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductHandlerService {

  public onChange : EventEmitter<any> = new EventEmitter<any>();
  public selectedProduct : ProductModel

  constructor(public http_request : Http_Requests) {
  	this.selectedProduct = {
  		ID : 0,
		Nombre : '',
		Descripcion: '',
		Existencia : 0,
		Precio : 0,
		Categoría : '',
		DuracionEnvio:0,
		Estado :  0,
		Imagen : '',
		Vendedor : '',
		TarifaEnvio : 0
  	};
  }

  public getProducts() : void{
  	this.http_request.getService('Productos')
  			.then(response => 
				{
					this.onChange.emit({data : response});
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

  public get getSelectedProduct(){
  	return this.selectedProduct;
  }

  public set setSelectedProduct(newProduct : ProductModel){
  	 this.selectedProduct = newProduct;
  }

  public pushImageCloud(newImage):void{

  }

}
