import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public title: string;
  public message: string;
  form: FormGroup;
  constructor(
  	public dialogRef: MatDialogRef<AddProductComponent>,
  	formBuilder: FormBuilder,
  	public snackBar: MatSnackBar) { 
  	this.form= formBuilder.group({
  		'nameFormControl': [null, Validators.required],
        'quantityFormControl': [null, Validators.required],
        'descriptionFormControl': [null, Validators.required],
        'priceFormControl': [null, Validators.required],
        'categoryFormControl': [null, Validators.required],
        'shippingTimeFormControl': [null, Validators.required],
        'shippingPriceFormControl': [null, Validators.required],
        'imageFormControl': [null, Validators.required]
  	});
  }

  ngOnInit() {
  	this.title = ""
    this.message = ""
  }

  addProduct(){//funcion para añadir producto a la lista de productos del vendedor
  	//validar si los datos son correcto para añadir o no el producto
  	this.dialogRef.close();
  }

}
