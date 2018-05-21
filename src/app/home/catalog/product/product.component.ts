import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { ProductModel } from '../../../shared/models/product.model';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../shared/handlers/global-service.service';
import { CartService } from '../../../shared/handlers/cart.handler.service';
import { LoginModalService } from '../../../login/loginModal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private selectedProduct : any;
  private isLogged : boolean = false;

  constructor(
  	private productHandler : ProductHandlerService, 
  	private loginService: LoginService,
  	private router: Router,
    private globalHandler : GlobalService,
    private cartHandler : CartService,
    public loginModalService: LoginModalService) { }

  ngOnInit() {
  	this.selectedProduct = this.productHandler.getSelectedProduct();
    this.isLoggedIn();
  }

  addToCart()
  {
    if(this.isLoggedIn){
      this.cartHandler.pushToCartElementList(this.selectedProduct);
      this.router.navigate(['cart']);
    }
    else this.loginModalService.openDialog();
  }

  isLoggedIn(){
    this.globalHandler.userLogged.subscribe({
      next : (event : any) => {
        if(!event) {          
          this.isLogged = false;
        }
        else{         
          this.isLogged = true;
        }
      }
    });
  }

}
