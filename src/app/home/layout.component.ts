import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'

@Component({
	selector : 'layout-home',
	templateUrl : './layout.component.html',
	styleUrls: ['./layout.component.css']
})

export class LayoutHome {

	constructor(public loginService: LoginService){	}
	
	isLoggedIn(){
		return this.loginService.isLoggedIn();
	}

	logIn(){
		this.loginService.signInWithGoogle();
	}

	logOut(){
		this.loginService.signOut();
	}

}



