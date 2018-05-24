import { Injectable } from '@angular/core';
import { AddProductComponent } from './add-product.component';
import { MatDialog, MatDialogRef } from '@angular/material';



@Injectable()

export class AddProductService{
	dialogRef: MatDialogRef<AddProductComponent>;
	constructor(private dialog: MatDialog){
	}

	openDialog(){
  	this.dialogRef = this.dialog.open(AddProductComponent, {
        width: '90%',
        data: { name: 'Ups!' }
    }); 
    return this.dialogRef.afterClosed()
  }



  

}