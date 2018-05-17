import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ProductHandlerService } from '../shared/handlers/product.handler.service';

@Component({
	selector : 'layout-home',
	templateUrl : './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutHome {

	constructor(private producHandler : ProductHandlerService,public loginService: LoginService){	
		this.producHandler.getProducts();
	}
	
	isLoggedIn(){
		return this.loginService.isLoggedIn();
	}

	logIn(){
		this.loginService.signInWithGoogle();
	}

}



