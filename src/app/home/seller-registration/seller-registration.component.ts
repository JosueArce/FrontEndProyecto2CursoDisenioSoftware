import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, Validators, NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatInput} from '@angular/material';

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
   companyNameFormControl = new FormControl('', [Validators.required, Validators.email]);
   matcher = new MyErrorStateMatcher();
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.companyNameFormControl.valid){
      this.openSnackBar('Solicitud Enviada!', 'Ok');
    } else{
      this.openSnackBar('Credenciales Incorrectas!', 'Ok');
    }
    
  }

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
    });
  }

}
