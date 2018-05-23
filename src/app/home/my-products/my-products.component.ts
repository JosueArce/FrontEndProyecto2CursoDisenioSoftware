import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product/add-product.service';


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

	
  constructor(public addProductService: AddProductService) {
    
  }

  ngOnInit() {
  }

  openDialog(){
  	this.addProductService.openDialog();
  }

}
