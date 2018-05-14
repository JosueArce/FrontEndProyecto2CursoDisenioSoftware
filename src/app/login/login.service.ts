import { Injectable } from '@angular/core';

import { AuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

@Injectable()

export class LoginService{

  private user : SocialUser;
  private loggedIn : boolean;

  constructor(private authService : AuthService){}

  signInWithGoogle() : void {
  	this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  	this.authService.authState.subscribe((user) => {
  		this.user = user;
  		this.loggedIn = (user != null);
  		console.log(user);
  	})
  }

  signOut() : void {
  	this.authService.signOut();
  }

  isLoggedIn() : boolean{
    return this.loggedIn;
  }

}