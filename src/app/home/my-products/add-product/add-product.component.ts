import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { CatalogHandlerService } from '../../../shared/handlers/catalog.handler.service';
import { ProductModel } from '../../../shared/models/product.model';
import { GlobalService } from '../../../shared/handlers/global-service.service';
import { AuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form: FormGroup;
  selected = '';
  newProduct : ProductModel;
  constructor(
    private productHandler : ProductHandlerService,
  	public dialogRef: MatDialogRef<AddProductComponent>,
  	formBuilder: FormBuilder,
  	public snackBar: MatSnackBar,
    private catalogHandler : CatalogHandlerService,
    private globalHandler : GlobalService) { 
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
    this.newProduct = this.productHandler.selectedProduct;
    this.newProduct.estado = 1;
  }
  openSnackBar(message: string, action: string) {
    let extraClasses=['background-grey'];
      this.snackBar.open(message, action, {
        duration: 2000,
        extraClasses: extraClasses
    });
  }

  onSubmit(newProduct : ProductModel,marca,idCategoria){
    if(this.form.valid){      
      newProduct.marca = marca; newProduct.categoria = idCategoria; newProduct.vendedor = this.globalHandler.userData.id;
      this.productHandler.pushImageCloud(newProduct);
      this.openSnackBar('Producto agregado!', 'Ok');
      this.dialogRef.close();
    } else {
      this.openSnackBar('Complete los campos correctamente!', 'Ok');
    }
    
  }

}
