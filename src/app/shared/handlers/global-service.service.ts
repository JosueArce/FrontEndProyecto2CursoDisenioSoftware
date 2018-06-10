import { Injectable,EventEmitter } from '@angular/core';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { LoginModalService } from '../../login/loginModal.service';
import { UserHandlerService } from './user.handler.service';


@Injectable()
export class GlobalService {
  openLogin: boolean; 
  public user : EventEmitter<SocialUser> = new EventEmitter<SocialUser>();
  public userData : SocialUser;
  public loggedIn : boolean;
  public userLogged : EventEmitter<any> = new EventEmitter<any>();
  constructor(private route: Router,
    private authService : AuthService, 
    public loginModalService: LoginModalService,
    private userHandler : UserHandlerService) {this.loggedIn=false; }

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
      this.user.emit(user);
      this.userData = user;
      this.userHandler.getUser(user.id);
      this.loggedIn = true;
    })
    this.loginModalService.dialogRef.close();
  }

  signOut() : void {
    this.authService.signOut()
    .then(response=>{ this.userLogged.emit(false);this.loggedIn = false;this.user.emit(null);this.userHandler.user.tipoUsuario = 0;});
  }

  isLoggedIn(){
    this.authService.authState.subscribe((user) => {
      if(user) {this.userLogged.emit(true);this.loggedIn = true;this.user.emit(user);this.userData = user;this.userHandler.getUser(user.id);}
    })
  }
 

}
