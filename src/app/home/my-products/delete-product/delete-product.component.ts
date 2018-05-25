import { Component, OnInit } from '@angular/core';
import { SellersHandlerService } from '../../../shared/handlers/sellers.handler.service';
import { DeleteProductService } from './delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private deleteService : DeleteProductService,private sellerHandler : SellersHandlerService) { 
  }

  ngOnInit() {
  }

  eliminarProducto(){
  	this.sellerHandler.deleteProduct(this.deleteService._selectedProducto.idProducto);
  }

}
