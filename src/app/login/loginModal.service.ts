import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginModalService {
  dialogRef: MatDialogRef<LoginComponent>
  constructor(private dialog: MatDialog) { }

  public openDialog() {
    //let dialogRef: MatDialogRef<LoginComponent>
    this.dialogRef = this.dialog.open(LoginComponent, {
        width: '50%',
        data: { name: 'Ups!' }
    }); 

    return this.dialogRef.afterClosed()
  }

}