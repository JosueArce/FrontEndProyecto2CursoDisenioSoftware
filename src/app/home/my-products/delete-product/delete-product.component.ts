import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { DeleteProductService } from './delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private deleteService : DeleteProductService,private productHandler : ProductHandlerService) { 
  }

  ngOnInit() {
  }

  eliminarProducto(){
  	this.productHandler.deleteProduct(this.deleteService._selectedProducto.idProducto);
  }

}
