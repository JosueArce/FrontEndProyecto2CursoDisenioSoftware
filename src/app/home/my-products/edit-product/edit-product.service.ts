import { Injectable } from '@angular/core';
import { EditProductComponent } from './edit-product.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable()

export class EditProductService{
  	dialogRef: MatDialogRef<EditProductComponent>;
	constructor(private dialog: MatDialog){
	}

	openDialog(){
  	this.dialogRef = this.dialog.open(EditProductComponent, {
        width: '90%',
        data: { name: 'Ups!' }
    }); 
    return this.dialogRef.afterClosed()
  }	
}