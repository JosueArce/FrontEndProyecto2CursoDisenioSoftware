import { Component } from '@angular/core';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';
import { CatalogHandlerService } from '../../shared/handlers/catalog.handler.service';
import { FilterDataPipe } from '../../shared/pipes/filter-data.pipe';
import { FilterByCategoryPipe } from '../../shared/pipes/filter-by-category.pipe';
import { FilterByBrandPipe } from '../../shared/pipes/filter-by-brand.pipe';

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

}
