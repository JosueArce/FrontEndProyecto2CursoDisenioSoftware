import { Component } from '@angular/core';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';
import { CatalogHandlerService } from '../../shared/handlers/catalog.handler.service';
import { FilterDataPipe } from '../../shared/pipes/filter-data.pipe';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  

  constructor(private productHandler : ProductHandlerService, 
  	private catalogHandler : CatalogHandlerService) 
  { 
    this.catalogHandler.getSellers();
    this.catalogHandler.getBrands();
    this.catalogHandler.getCategories();
  }

  selectedProduct(product){
  	this.productHandler.setSelectedProduct(product);
  }

  private getCheckedBrands(estado,marca){
    estado = !estado;
    if(estado) 
    {  
      this.catalogHandler.addSelectedBrand(marca);
    }
    else{
      this.catalogHandler.removeSelectedBrand(marca);
    }

    this.catalogHandler.applyFilter();
  }

  private getCheckedCategories(estado,category){
    estado = !estado;
    if(estado) 
    { 
      this.catalogHandler.addSelectedCategory(category);
    }
    else{
      this.catalogHandler.removeSelectedCategory(category);
    }

    this.catalogHandler.applyFilter();
  }

  private getCheckedSeller(estado,seller){
    estado = !estado;
    if(estado) 
    {  
      this.catalogHandler.addSelectedSeller(seller);
    }
    else{
      this.catalogHandler.removeSelectedSeller(seller);
    }

    this.catalogHandler.applyFilter();
  }

}
