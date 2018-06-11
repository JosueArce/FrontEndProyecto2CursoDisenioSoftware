import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { compras } from '../../shared/models/compras.model';
import { PurchaseService } from '../../shared/handlers/purchase.handler.service';
import { ISubscription } from "rxjs/Subscription";
import { UserHandlerService } from '../../shared/handlers/user.handler.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private displayedColumns : string[] = [];
  private dataSource : MatTableDataSource<compras>; 
  private subscriber : ISubscription; 
  //private interval : any;
  constructor(private purchaseHandler:PurchaseService,private userHandler:UserHandlerService) { 
  	 this.displayedColumns = ['nombreComprador','fechaHora','tipoEntrega'];
     this.purchaseHandler.getComprasUsuario();

     /*this.interval = setInterval(()=>{
       if(this.userHandler.user.idUsuario != '')
         {this.purchaseHandler.getComprasUsuario();console.log("ENTRE");}
       else console.log(" NO ESTAS LOGEADO, LOGEATE!");
     },500);*/

     //se pone un ojo en la lista
  	this.subscriber = this.purchaseHandler.comprasUsuario.subscribe({
  	 	next:(data:any)=>{
  	 		this.dataSource = new MatTableDataSource(data);
  	 		this.dataSource.paginator = this.paginator;
  	 	}
  	 });
  }

   ngOnDestroy(){
    this.subscriber.unsubscribe();
    //clearInterval(this.interval);
  }


  //filtro para buscar texto
  applyFilter(filterValue: string) 
  {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
