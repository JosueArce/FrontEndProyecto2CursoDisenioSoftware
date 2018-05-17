import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit,OnDestroy {
  
  private productRecords : ProductModel[];

  constructor(private productHandler : ProductHandlerService) { 
  	
  }
  ngOnInit(){
  	this.productHandler.onChange.subscribe({
      next : (event : any) => {
        this.productRecords = event.data;
      }
    });
  }

  ngOnDestroy(){
  	//quitar subscripcion
  	/*this.productHandler.onChange.unsubscribe();*/
  }

}
