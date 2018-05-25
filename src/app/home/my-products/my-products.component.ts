import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product/add-product.service';
import { EditProductService } from './edit-product/edit-product.service';
import { SellersHandlerService } from '../../shared/handlers/sellers.handler.service';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';
import { GlobalService } from '../../shared/handlers/global-service.service';
import { ProductModel } from '../../shared/models/product.model';
import { DeleteProductService } from './delete-product/delete-product.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {ISubscription} from "rxjs/Subscription";


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent{

  public sellerProducts : Array<ProductModel>;
  public dialogRefEdit: MatDialogRef<EditProductComponent>;
  public dialogRefDelete: MatDialogRef<DeleteProductComponent>;
  private subscriber : ISubscription;
  

  constructor(
    public addProductService: AddProductService,
    public editProductService: EditProductService,
    public deleteProductService : DeleteProductService,
    private sellerHandler : SellersHandlerService,
    private globalHandler : GlobalService,
    private productHandler : ProductHandlerService,
    private deleteService : DeleteProductService,
    public dialog: MatDialog) {
  }


  openAddDialog(){
  	this.addProductService.openDialog();
  }

  openEditDialog(producto : ProductModel){
    this.editProductService._selectedProducto = producto;
    this.dialogRefEdit = this.dialog.open(EditProductComponent, {
        width: '90%',
        data: { name: 'Ups!' }
    }); 
    return this.dialogRefEdit.afterClosed();
  }

  openDeleteDialog(producto){
    this.deleteService._selectedProducto = producto;
    this.dialogRefDelete = this.dialog.open(DeleteProductComponent, {
        width: '90%',
        data: { name: 'Ups!' }
    }); 
    return this.dialogRefDelete.afterClosed();
  }

}
