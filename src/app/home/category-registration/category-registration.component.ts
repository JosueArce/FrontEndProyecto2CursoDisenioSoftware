import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, Validators, NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { GlobalService } from '../../shared/handlers/global-service.service';
import { LoginModalService } from '../../login/loginModal.service';
import { CatalogHandlerService } from '../../shared/handlers/catalog.handler.service';
import { category } from '../../shared/models/categorie.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-category-registration',
  templateUrl: './category-registration.component.html',
  styleUrls: ['./category-registration.component.css']
})


export class CategoryRegistrationComponent {

  categoryNameFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();


  constructor(private globalService: GlobalService,
    private loginModalService: LoginModalService,
    private catalogHandler:CatalogHandlerService,
    public snackBar: MatSnackBar, ) { }

 

  //barra de mensaje
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
    });
  }

  //permtie enviar una nueva solicitud al servidor de tipo categoria
  onSubmit(categoria){
    if(this.globalService.loggedIn){
      if(this.categoryNameFormControl.valid){
        for (var i = this.catalogHandler.categoryRecords.length - 1; i >= 0; i--) {
          if(this.catalogHandler.categoryRecords[i]===categoria){
            this.openSnackBar('Ya existe una categoría con este nombre!', 'Ok');
          }
        }
        //enviar solicitud
        this.catalogHandler.postCategory({idVendedor: this.globalService.userData.id, descripcion:categoria});
        this.openSnackBar('Solicitud enviada!', 'Ok');
      }
    }
    else this.loginModalService.openDialog();
  }
}
