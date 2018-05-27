import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteProductComponent } from './delete-product.component';
import { ProductModel } from '../../../shared/models/product.model';


@Injectable()
export class DeleteProductService {

  dialogRef: MatDialogRef<DeleteProductComponent>;
  public _selectedProducto : ProductModel;

  constructor(private dialog?: MatDialog) { 
  }
  public set setProduct(product : ProductModel){
    this._selectedProducto = product;
  }

  public get getSelectedProduct() : ProductModel{
    return this._selectedProducto;
  }

}
