import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from './login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  constructor(
    public loginService: LoginService, 
    public router: Router){}

  signIn(){
  	this.loginService.signInWithGoogle();
  	this.router.navigate(['about']);
  }

  signOut(){
  	this.loginService.signOut();
  }

  

}
