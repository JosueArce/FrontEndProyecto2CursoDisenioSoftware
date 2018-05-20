import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoginModalService } from '../login/loginModal.service';
import { ProductHandlerService } from '../shared/handlers/product.handler.service';
import { GlobalService } from '../shared/handlers/global-service.service';

@Component({
	selector : 'layout-home',
	templateUrl : './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutHome {

	constructor(
		private producHandler : ProductHandlerService,
		public globalService: GlobalService,
		public loginModalService: LoginModalService){	
		this.producHandler.getProducts();
	}
	
	isLoggedIn(){
		return this.globalService.isLoggedIn();
	}

	logIn(){
		this.loginModalService.openDialog();
		//this.loginService.signInWithGoogle();
	}

}



