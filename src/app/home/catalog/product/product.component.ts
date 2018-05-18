import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private selectedProduct : any;

  constructor(private productHandler : ProductHandlerService) { }

  ngOnInit() {
  	this.selectedProduct = this.productHandler.getSelectedProduct();
  }

}
