import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product/add-product.service';
import { EditProductService } from './edit-product/edit-product.service';
import { SellersHandlerService } from '../../shared/handlers/sellers.handler.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent{


  constructor(
    public addProductService: AddProductService,
    public editProductService: EditProductService,
    private sellerHandler : SellersHandlerService) {
    this.sellerHandler.getProducts();
  }

  openAddDialog(){
  	this.addProductService.openDialog();
  }

  openEditDialog(){
    this.editProductService.openDialog();
  }

}
