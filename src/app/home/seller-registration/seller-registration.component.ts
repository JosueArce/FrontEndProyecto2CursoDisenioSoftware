import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, Validators, NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatInput } from '@angular/material';
import { SellerRegistrationHandlerService } from '../../shared/handlers/seller-registration.handler.service';
import { seller } from '../../shared/models/seller.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {
   companyNameFormControl = new FormControl('', [Validators.required]);
   matcher = new MyErrorStateMatcher();
   company: string;
   companyNames: Array<string>;
   sellers: Array<seller>;
  constructor(public snackBar: MatSnackBar, private sellerRegistrationService: SellerRegistrationHandlerService) {
    this.company="";
    this.sellers=new Array<seller>();
    this.sellerRegistrationService.getSellers();
    this.sellers=this.sellerRegistrationService.sellerList;
    this.companyNames = new Array<string>();
    for (var i = 0; i <= this.sellers.length - 1; i++) {
      this.companyNames[i] = this.sellers[i].comercio;
    }

  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.companyNameFormControl.valid){
      if (!this.isUnique()) {
        this.openSnackBar('Ya existe una compañía con ese nombre!', 'Ok');
      }else{
        this.sellerRegistrationService.sendSellerRequest({idVendedor:"", Comercio:this.company})
        this.openSnackBar('Solicitud Enviada!', 'Ok');
      }
      
    } else{
      this.openSnackBar('Credenciales Incorrectas!', 'Ok');
    }
    
  }

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
    });
  }

  isUnique(): boolean{
    for (var i = this.companyNames.length - 1; i >= 0; i--) {
      if(this.companyNames[i]===this.company){
        console.log('no es unico')
        return false;
      }
    }
    return true;
  }

}
