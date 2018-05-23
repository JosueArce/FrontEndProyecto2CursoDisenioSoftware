import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  constructor(
  	public dialogRef: MatDialogRef<EditProductComponent>,
  	formBuilder: FormBuilder,
  	public snackBar: MatSnackBar) { 
  	this.form= formBuilder.group({
  		'nameFormControl': [null, Validators.required],
        'quantityFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'descriptionFormControl': [null, Validators.required],
        'priceFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        //'categoryFormControl': [null, Validators.required],
        'shippingTimeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'shippingFeeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        //'imageFormControl': [null, Validators.required]
  	});
  }

  ngOnInit() {
  }

  onSubmit(){//funcion para añadir producto a la lista de productos del vendedor
  	//validar si los datos son correcto para añadir o no el producto
  	if(this.form.valid){
  		this.dialogRef.close();
      this.openSnackBar('Producto editado!', 'Ok');
  	} else {
      this.openSnackBar('Credenciales Incorrectas!', 'Ok');
    }
  	
  }

  openSnackBar(message: string, action: string) {
    let extraClasses=['background-grey'];
      this.snackBar.open(message, action, {
        duration: 2000,
        extraClasses: extraClasses
    });
  }

}
