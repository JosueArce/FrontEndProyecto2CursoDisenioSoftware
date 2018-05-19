import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { ProductModel } from '../../../shared/models/product.model';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../shared/handlers/global-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private selectedProduct : any;

  constructor(
  	private productHandler : ProductHandlerService, 
  	private loginService: LoginService,
  	private router: Router,
    private globalHandler : GlobalService) { }

  ngOnInit() {
  	this.selectedProduct = this.productHandler.getSelectedProduct();
  }

  addToCart(){
  	if(!this.loginService.isLoggedIn()){
      this.globalHandler.pushToLocalStorage("currentRoute",this.globalHandler.getCurrentRoute());
  		this.router.navigate(['login']);
  	}
  }

}
