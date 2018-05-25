import { Injectable } from '@angular/core';
import { EditProductComponent } from './edit-product.component';
import { ProductModel } from '../../../shared/models/product.model';

@Injectable()

export class EditProductService{

 public _selectedProducto : ProductModel;

	constructor() {}

  public set setProduct(product : ProductModel){
    this._selectedProducto = product;    
  }

  public get getSelectedProduct() : ProductModel{
    return this._selectedProducto;
  }
}


