import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { CatalogHandlerService } from '../../../shared/handlers/catalog.handler.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form: FormGroup;
  product = {//prducto quemado, debería ser el producto seleccionado de la lista de productos del vendedor
    nombre: 'Nombre de prueba',
    cantidad: 12,
    descripcion: 'Descripcion de prueba',
    precio: 23000,
    duracion: 12,
    tarifa: 2500,
  };
  constructor(
    private productHandler : ProductHandlerService,
  	public dialogRef: MatDialogRef<EditProductComponent>,
  	formBuilder: FormBuilder,
  	public snackBar: MatSnackBar,
    private catalogHandler : CatalogHandlerService) { 
  	this.form= formBuilder.group({
  		'nameFormControl': [null, Validators.required],
        'quantityFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'descriptionFormControl': [null, Validators.required],
        'priceFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'categoryFormControl': [null, Validators.required],
        'shippingTimeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'shippingFeeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        //'imageFormControl': [null, Validators.required]
  	});
    this.catalogHandler.getCategories();
  }

  ngOnInit() {
  }

  onSubmit(){//funcion para añadir producto a la lista de productos del vendedor
  	//validar si los datos son correctos para añadir o no el producto
  	if(this.form.valid){
  		this.dialogRef.close();
      this.openSnackBar('Producto agregado!', 'Ok');
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
