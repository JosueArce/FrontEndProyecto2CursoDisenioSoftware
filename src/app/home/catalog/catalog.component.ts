import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../shared/handlers/product.handler.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private productHandler : ProductHandlerService) { 
  	this.productHandler.onChange.subscribe({
      next : (event : any) => {
        console.log(event);
      }
    });
  }

  ngOnInit() {
  }

}
