import { Injectable } from '@angular/core';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

@Injectable()
export class GlobalService {
  openLogin: boolean; 
  private user : SocialUser;
  private loggedIn : boolean;
  constructor(private route: Router,private authService : AuthService) { }

  public pushToLocalStorage(nombre : string, data : any) : void{
  	localStorage.setItem(nombre,JSON.stringify(data));
  }

  public getFromLocalStorage(nombre : string) : void {
  	return JSON.parse(localStorage.getItem(nombre));
  }

  public getCurrentRoute() : string{
  	return this.route.url;
  }

  signInWithGoogle() : void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    })
  }

  signOut() : void {
    this.authService.signOut();
  }

  isLoggedIn() : boolean{
    return this.loggedIn;
  }

}
