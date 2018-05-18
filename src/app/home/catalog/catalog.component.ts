import { Component } from '@angular/core';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';
import { FilterDataPipe } from '../../shared/pipes/filter-data.pipe';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  

  constructor(private productHandler : ProductHandlerService) { 

  }

  selectedProduct(product){
  	this.productHandler.setSelectedProduct(product);
  }

}
