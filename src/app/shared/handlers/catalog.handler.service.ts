import { Injectable } from '@angular/core';
import { ProductHandlerService } from './product.handler.service';
import { seller } from '../models/seller.model';
import { brand } from '../models/brand.model';
import { category } from '../models/categorie.model';
import { Http_Requests } from '../http_request.service';
import { FilterByBrandPipe } from '../pipes/filter-by-brand.pipe';
import { FilterByCategoryPipe } from '../pipes/filter-by-category.pipe';
import { FilterBySellerPipe } from '../pipes/filter-by-seller.pipe';

@Injectable()
export class CatalogHandlerService {

  public sellerRecords : Array<seller>;
  public categoryRecords : Array<category>;
  public brandsRecords : Array<brand>;
  
  constructor(private productHandler : ProductHandlerService, 
  	private http_request : Http_Requests,
  	private filterBrand : FilterByBrandPipe,
  	private filterCategory : FilterByCategoryPipe,
  	private filterSeller : FilterBySellerPipe) { 
  	this.sellerRecords = new Array<seller>();
  	this.categoryRecords = new Array<category>();
  	this.brandsRecords = new Array<brand>();
  }

  public filterByBrand(brand : string){
  	console.log(brand);
  	this.filterBrand.transform(this.productHandler.productRecords,brand);
  }

  public filterByCategory(category : string){
  	console.log(category);
  	console.log(this.filterCategory.transform(this.productHandler.productRecords,category));
  }

  public filterBySeller(){

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
