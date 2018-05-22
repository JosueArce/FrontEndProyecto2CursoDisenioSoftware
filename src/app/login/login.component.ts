import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/handlers/global-service.service';
import { LoginService } from './login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  constructor(
    public loginService: LoginService, 
    public router: Router,
    private globalHandler : GlobalService){}

  signIn(){
  	this.loginService.signInWithGoogle();
  }

  signOut(){
  	this.loginService.signOut();
  }

  

}
