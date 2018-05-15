import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

import { LoginComponent } from './login.component';

@Injectable()

export class LoginService{
  openLogin: boolean; 
  private user : SocialUser;
  private loggedIn : boolean;

  constructor(private authService : AuthService, private dialog: MatDialog){}

  openLoginModal(){
    let dialogRef: MatDialogRef<LoginComponent>;
    dialogRef = this.dialog.open(LoginComponent, {
        width: '70%',
        data: { name: 'Ups!' }
    });
    return dialogRef.afterClosed();
  }

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