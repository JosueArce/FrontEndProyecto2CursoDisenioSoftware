import { Injectable } from '@angular/core';
import { ProductHandlerService } from './product.handler.service';
import { seller } from '../models/seller.model';
import { brand } from '../models/brand.model';
import { category } from '../models/categorie.model';
import { Http_Requests } from '../http_request.service';

@Injectable()
export class CatalogHandlerService {

  public sellerRecords : Array<seller>;
  public categoryRecords : Array<category>;
  public brandsRecords : Array<brand>;
  
  constructor(private productHandler : ProductHandlerService, private http_request : Http_Requests) { 
  	this.sellerRecords = new Array<seller>();
  	this.categoryRecords = new Array<category>();
  	this.brandsRecords = new Array<brand>();
  }


  public getSellers() : void{
  	this.http_request.getService('Vendedores')
		.then(response => 
		{
			this.sellerRecords = response;
		})
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

  public postSeller(newProduct : seller) : void{
  	this.http_request.postService(newProduct,'insertProducts')
		.then(response => 
		{
			//this.onChange.emit({data : response.data});
		}
		)
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

  public getCategories() : void{
  	this.http_request.getService('Categorias')
		.then(response => 
		{
			this.categoryRecords = response;
		})
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

  public postCategorie(newProduct : seller) : void{
  	this.http_request.postService(newProduct,'insertProducts')
		.then(response => 
		{
			//this.onChange.emit({data : response.data});
		}
		)
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

  public getBrands() : void{
  	this.http_request.getService('Marcas')
		.then(response => 
		{
			this.brandsRecords = response;
		})
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

  public postBrands(newProduct : seller) : void{
  	this.http_request.postService(newProduct,'insertProducts')
		.then(response => 
		{
			//this.onChange.emit({data : response.data});
		}
		)
		.catch(error => 
			{
				//this.sharedMethods.openSnackBar("Mensaje de aviso!",error.message);
				console.log("Error: ",error)
			}
		)
  }

}
