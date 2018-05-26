import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../../shared/handlers/cart.handler.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators, FormControl } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
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
  matcher = new MyErrorStateMatcher();
  constructor(private cartHandler: CartService, formBuilder: FormBuilder,) { 
  	this.form= formBuilder.group({
  		'holderFormControl': [null, Validators.required],
        'cardNumberFormControl': [null, Validators.compose([
        	Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)])],
        'cvcFormControl': [null, Validators.compose([
        	Validators.required, Validators.min(100), Validators.max(999)])],
  	});
  }
  ngOnInit() {

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
