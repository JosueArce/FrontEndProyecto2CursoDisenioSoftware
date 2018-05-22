import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoginModalService } from '../login/loginModal.service';
import { ProductHandlerService } from '../shared/handlers/product.handler.service';
import { GlobalService } from '../shared/handlers/global-service.service';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";

@Component({
	selector : 'layout-home',
	templateUrl : './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutHome{

	private isLogged : boolean = false;

	constructor(
		private producHandler : ProductHandlerService,
		public globalService: GlobalService,
		public loginModalService: LoginModalService,
		private router: Router,
		private authService : AuthService){	
		this.producHandler.getProducts();
		this.globalService.isLoggedIn();
		this.isLoggedIn();
	}
	
	isLoggedIn(){
		this.globalService.userLogged.subscribe({
	      next : (event : any) => {
	      	if(!event) this.isLogged = false;
	      	else this.isLogged = true;
	      }
	    });
	}

	

	logIn(){
		this.loginModalService.openDialog();
		//this.globalService.pushToLocalStorage("currentRoute",this.globalService.getCurrentRoute());
		//this.loginService.signInWithGoogle();
	}

}



