import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  public cartElements : Array<ProductModel>;


  constructor() {
  	 this.cartElements = new Array<ProductModel>();
  }


  public pushToCartElementList(newElement : ProductModel) : void{
    if(!this.cartElements.includes(newElement))
      this.cartElements.push(newElement);
    else 
      return null;//cambiar esto por mostrar un mensajito
  }

  public getFromCartElementList() :Array<ProductModel>{
  	return this.cartElements;
  }

  public getSubTotal(){
    return 0;
  }

  public addProductQuantity(){

  }

  public removeProductQuantity(){
    
  }

  public getTotal(){
    let total = 0;
    for(let item in this.cartElements){
      total+=this.cartElements[item].precio;
    }
    return total;
  }

  public getDescuento(){
    return 0;
  }

  public getTotalEnvio(){
    let totalEnvio = 0;
    for(let item in this.cartElements){
      totalEnvio += this.cartElements[item].tarifaEnvio;
    }
    return totalEnvio;
  }

}