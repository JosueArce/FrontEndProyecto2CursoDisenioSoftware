import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { ProductModel } from '../../../shared/models/product.model';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../shared/handlers/global-service.service';
import { CartService } from '../../../shared/handlers/cart.handler.service';
import { LoginModalService } from '../../../login/loginModal.service';
import {ISubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private selectedProduct : any;
  private isLogged : boolean = false;
  private subscription: ISubscription;

  constructor(
  	private productHandler : ProductHandlerService, 
  	private loginService: LoginService,
  	private router: Router,
    private globalHandler : GlobalService,
    private cartHandler : CartService,
    public loginModalService: LoginModalService) 
  {
      this.globalHandler.isLoggedIn();
    }

  ngOnInit() {
  	this.selectedProduct = this.productHandler.getSelectedProduct();
  }

  addToCart()
  {
    if(this.globalHandler.loggedIn){
      this.cartHandler.pushToCartElementList(this.selectedProduct);
      this.router.navigate(['cart']);
    }
    else this.loginModalService.openDialog();
  }
}
