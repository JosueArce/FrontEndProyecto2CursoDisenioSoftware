import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {  MatSnackBar } from '@angular/material';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { CatalogHandlerService } from '../../../shared/handlers/catalog.handler.service';
import { EditProductService } from './edit-product.service';
import { SellersHandlerService } from '../../../shared/handlers/sellers.handler.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  form: FormGroup;

  constructor(
    private productHandler : ProductHandlerService,
  	formBuilder: FormBuilder,
  	public snackBar: MatSnackBar,
    private catalogHandler : CatalogHandlerService,
    private editHandler : EditProductService,
    private sellerHandler : SellersHandlerService,
    private editProductService : EditProductService) { 
  	this.form= formBuilder.group({
  		'nameFormControl': [null, Validators.required],
        'quantityFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'descriptionFormControl': [null, Validators.required],
        'priceFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'categoryFormControl': [null, Validators.required],
        'brandFormControl': [null, Validators.required],
        'shippingTimeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        'shippingFeeFormControl': [null, Validators.compose([Validators.required, Validators.min(0)])],
        //'imageFormControl': [null, Validators.required]
  	});
    this.catalogHandler.getCategories();
    this.catalogHandler.getBrands();
  }

  ngOnInit() {
  }

  onSubmit(){//funcion para añadir producto a la lista de productos del vendedor
  	//validar si los datos son correctos para añadir o no el producto
  	if(this.form.valid){
      //this.editProductService.getSelectedProduct.idVendedor = buscarVendedor(this.editProductService.getSelectedProduct.ve);
      this.editProductService.getSelectedProduct.categoria = this.buscarCategoria(this.editProductService.getSelectedProduct.categoria);
      this.productHandler.editImageProduct(this.editProductService.getSelectedProduct);
      this.openSnackBar('Producto editado con éxito!', 'Ok');
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

  buscarCategoria(categoria) : string{
    for (var i = 0; i<this.catalogHandler.categoryRecords.length;i++) {
      if(this.catalogHandler.categoryRecords[i].nombre == categoria)
        return this.catalogHandler.categoryRecords[i].idCategoria.toString();
    }
  }
}
