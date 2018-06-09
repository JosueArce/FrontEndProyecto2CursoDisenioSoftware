
//HAY QUE BORRAR ESTE SERVICIO

import { Injectable } from '@angular/core';

import { AuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { MatDialog, MatDialogRef,MatDialogClose } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { LoginModalService } from './loginModal.service';
import { UserHandlerService } from '../shared/handlers/user.handler.service'

@Injectable()

export class LoginService{
  openLogin: boolean; 
  private user : SocialUser;
  private loggedIn : boolean;

  constructor(private authService : AuthService, 
    public snackBar: MatSnackBar,
    private closeModal : LoginModalService,
    private userHandler : UserHandlerService){}

  signInWithGoogle() : void {

  	this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  	this.authService.authState.subscribe((user) => {		
      if(user){
        this.closeModal.dialogRef.close();
        this.openSnackBar('Has iniciado sesión!', 'Ok');
        this.user = user;
        //this.userHandler.getUser(user.id);
        this.loggedIn = (user != null);

      }
  	})
    
  }

  signOut() : void {
  	this.authService.signOut();
    this.openSnackBar('Has cerrado sesión!', 'Ok');
  }

  isLoggedIn() : boolean{
    return this.loggedIn;
  }

  openSnackBar(message: string, action: string) {
    let extraClasses=['background-grey'];
      this.snackBar.open(message, action, {
        duration: 2000,
        extraClasses: extraClasses
    });
  }

}