import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  public cartElements : ProductModel[];


  constructor(public http_request : Http_Requests) {
  	
  }


  public pushToCartElementList(newElement : ProductModel) : void{
  	this.cartElements.push(newElement);
  }

  public getFromCartElementList() : ProductModel[]{
  	return this.cartElements;
  }

}