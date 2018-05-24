import { Injectable, } from '@angular/core';
import { ProductHandlerService } from './product.handler.service';
import { seller } from '../models/seller.model';
import { brand } from '../models/brand.model';
import { category } from '../models/categorie.model';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CatalogHandlerService {

  public sellerRecords : Array<seller>;
  public categoryRecords : Array<category>;
  public brandsRecords : Array<brand>;

  public selectedBrands : Array<string>;
  public selectedCategories :Array<string>;
  public selectedSellers :Array<string>; 

  constructor(private productHandler : ProductHandlerService, 
  	private http_request : Http_Requests) { 
    this.productHandler.getProducts();

  	this.sellerRecords = new Array<seller>();
  	this.categoryRecords = new Array<category>();
  	this.brandsRecords = new Array<brand>();

    this.selectedBrands = new Array<string>();
    this.selectedSellers = new Array<string>();
    this.selectedCategories = new Array<string>();
  }

  public addSelectedBrand(marca : string){
  	this.selectedBrands.push(marca);
  }

  public getSelectedBrands(): string[]{
  	return this.selectedBrands;
  }

  public removeSelectedBrand(marca : string){
  	for(let i = 0;i< this.selectedBrands.length;i++){
  		if(this.selectedBrands[i] === marca){
  			this.selectedBrands.splice(i,1);
  		}
  	}
  }

  public addSelectedCategory(categoria : string){
  	this.selectedCategories.push(categoria);
  }

  public getSelectedCategories() : string[]{
  	return this.selectedCategories;
  }

  public removeSelectedCategory(categoria : string){
  	for(let i = 0;i< this.selectedCategories.length;i++){
  		if(this.selectedCategories[i] === categoria){
  			this.selectedCategories.splice(i,1);
  		}
  	}
  }

  public addSelectedSeller(seller : string){
  	this.selectedSellers.push(seller);
  }

  public getSelectedSeller() : string[]{
  	return this.selectedSellers;
  }

  public removeSelectedSeller(seller : string){
  	for(let i = 0;i< this.selectedSellers.length;i++){
  		if(this.selectedSellers[i] === seller){
  			this.selectedSellers.splice(i,1);
  		}
  	}
  }


  public applyFilter(){
    	this.productHandler.productRecords = this.productHandler.backUpProductRecrods.slice(0);

    	for(let brand in this.selectedBrands)
    	{
    		this.filterSelection(2,this.selectedBrands[brand]);
    	}

    	for(let category in this.selectedCategories)
    	{
  		  this.filterSelection(1,this.selectedCategories[category]);
    	}

    	for(let seller in this.selectedSellers)
    	{
  		  this.filterSelection(3,this.selectedSellers[seller]);
    	}
  }

  public filterSelection(checker : number, filtrador : string){
    this.productHandler.productRecords = this.productHandler.productRecords.filter((producto : ProductModel) =>{
  	 	switch (checker) {
  	 		case 1://categorias  
  	 			return producto.categoria === filtrador; 	
  	 		case 2://marcas
  	 			return producto.marca === filtrador;
  	 		case 3://vendedores
  	 			return producto.vendedor === filtrador;
  	 	}
  	});	
  }

  public getSellers() : void{
  	this.http_request.getService('Vendedores')
		.then(response => 
		{
			this.sellerRecords = response;
      for(let item in this.sellerRecords){
        this.sellerRecords[item].checked = false;
      }
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
      for(let item in this.categoryRecords){
        this.categoryRecords[item].checked = false;
      }
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
			for(let item in this.brandsRecords){
				this.brandsRecords[item].checked = false;
			}
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
