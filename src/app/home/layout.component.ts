import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login/loginModal.service';
import { ProductHandlerService } from '../shared/handlers/product.handler.service';
import { GlobalService } from '../shared/handlers/global-service.service';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import { SellersHandlerService } from '../shared/handlers/sellers.handler.service';
import { UserHandlerService } from '../shared/handlers/user.handler.service';



@Component({
	selector : 'layout-home',
	templateUrl : './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutHome{

	private isLogged : boolean = false;
	private user : SocialUser = null;

	constructor(
		private producHandler : ProductHandlerService,
		public globalService: GlobalService,
		public loginModalService: LoginModalService,
		private router: Router,
		private authService : AuthService,
		private sellerHandler : SellersHandlerService,
		private userHandler : UserHandlerService){	
		this.producHandler.getProducts();
		this.globalService.isLoggedIn();
		this.isLoggedIn();
	}
	
	isLoggedIn(){
		this.globalService.userLogged.subscribe({
	      next : (event : any) => {
	      	if(!event) this.isLogged = false;
	      	else 
      		{
      			this.isLogged = true;
      			this.globalService.user.subscribe({
      				next : (user : SocialUser) =>{
      					if(user){
      						this.user = user;
      					}
      						
      					else this.user = null;
      				}
      			});
      		};
	      }
	    });
	}

	

	logIn(){
		this.loginModalService.openDialog();
	}

	logOut(){
		this.globalService.signOut();
		this.userType = -1;
	}

	

}



