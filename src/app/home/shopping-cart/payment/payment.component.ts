import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http_Requests } from '../../../shared/http_request.service';
import { CartService } from '../../../shared/handlers/cart.handler.service';
import { ProductModel } from '../../../shared/models/product.model';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators, FormControl } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
  	{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class PaymentComponent implements OnInit {
  date = new FormControl(moment());
  form: FormGroup;
  direccionFormControl = new FormControl('', [Validators.required]);
  provinciaFormControl = new FormControl('', [Validators.required]);
  cantonFormControl = new FormControl('', [Validators.required]);
  distritoFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  tipoEntrega: any;
  provincias: Array<any>;
  provinciaSeleccionada: any;
  cantonSeleccionado: any;
  cantones: Array<any>;
  distritos: Array<any>;
  
  constructor(private cartHandler: CartService, formBuilder: FormBuilder,private http_request: Http_Requests) { 
  	this.form= formBuilder.group({
  		'holderFormControl': [null, Validators.required],
        'cardNumberFormControl': [null, Validators.compose([
        	Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)])],
        'cvcFormControl': [null, Validators.compose([
        	Validators.required, Validators.min(100), Validators.max(999)])],
  	});
    this.provincias=new Array<any>();
    this.http_request.getService('Provincias')
    .then(response => {
      this.provincias=response;
    })
    .catch(error =>{
      console.log("Error: ",error)
    })

    this.cantones=new Array<any>();
    this.http_request.getService('Cantones')
    .then(response => {
      this.cantones=response;
    })
    .catch(error =>{
      console.log("Error: ",error)
    })

    this.distritos=new Array<any>();
    this.http_request.getService('Distritos')
    .then(response => {
      this.distritos=response;
    })
    .catch(error =>{
      console.log("Error: ",error)
    })

  }
  ngOnInit() {

  }

  filtrarCantones(idProvincia: number): Array<any>{
    let temp = new Array<any>();
    for(let item in this.cantones){
      if(this.cantones[item].idProvincia==idProvincia){
        temp.push(this.cantones[item]);
      }
    }
    return temp;
  }  

  filtrarDistritos(idCanton: number): Array<any>{
    let temp = new Array<any>();
    for(let item in this.distritos){
      if(this.distritos[item].idCanton==idCanton){
        temp.push(this.distritos[item]);
      }
    }
    return temp;
  }  

  //Obtiene la cantidad de items del mismo producto requerido por el usuario a partir del id del producto
  getCantidad(productId: number): number{
    
    for(let item in this.cartHandler.lista){
      if(this.cartHandler.lista[item].id === productId)
        return this.cartHandler.lista[item].cant;
    }
  }
  //retorna el precio del producto, si es a domicilio se le suma la tarifa de envio
  getPrecio(producto: any, domicilio: boolean): number{
    if(domicilio){
      return producto.precio+producto.tarifa;
    } else{
      return producto.precio;
    }
  }

  getTotal(domicilio: boolean):number{
    let total=0;
    for (let item in this.cartHandler.getFromCartElementList()) {
      total+= this.getPrecio(this.cartHandler.getFromCartElementList()[item],domicilio);
    }
    return total
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normlizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit(){
  	if(this.form.valid){

  	}
  }

}
