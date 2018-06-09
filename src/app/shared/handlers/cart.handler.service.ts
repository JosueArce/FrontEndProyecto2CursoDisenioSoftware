import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  public cartElements : Array<ProductModel>;
  public backUpCartElements : Array<any>;


  constructor() {
  	 this.cartElements = new Array<ProductModel>();
     this.backUpCartElements = new Array<any>();
  }


  public pushToCartElementList(newElement : ProductModel) : void{
    for(let item in this.cartElements){
      if(this.cartElements[item].idProducto === newElement.idProducto){
         return null;//poner mensaje de que ya existe
      }
    }
    this.cartElements.push(newElement); this.copyList(newElement);
  }

  private copyList(producto : ProductModel){
    this.backUpCartElements.push(
      {
        idProducto : producto.idProducto,
        producto : producto.producto,
        imagen : producto.imagen,
        vendedor : producto.nComercio,
        descripcion : producto.descripcion,
        tarifa : producto.tarifaEnvio,
        duracion : producto.tarifaEnvio,
        existencia : producto.existencia,
        precio : producto.precio
      }
    );
  }

  public getFromCartElementList() :Array<ProductModel>{
  	return this.backUpCartElements;
  }

  public removeFromCartElements(producto : ProductModel) : void {
    let index = this.cartElements.indexOf(producto,0);
    this.cartElements.splice(index,1);

    index = this.backUpCartElements.indexOf(producto,0);
    this.backUpCartElements.splice(index,1);
  }

  public getSubTotal() : number{
    let total = 0;
    for(let item in this.cartElements){
      total+=this.cartElements[item].precio;
    }
    return total;
  }

  public onChangeQuantity(producto, cantidadActual : number){
    for(let item in this.cartElements){
      if(producto.idProducto === this.cartElements[item].idProducto)
        {
        this.cartElements[item].precio = this.backUpCartElements[item].precio * cantidadActual;
        return;
      }
    }
  }

  public getTotal() : number{
    return this.getSubTotal() + this.getTotalEnvio();
  }

  public getTotalEnvio() : number{
    let totalEnvio = 0;
    for(let item in this.cartElements){
      totalEnvio += this.cartElements[item].tarifaEnvio;
    }
    return totalEnvio;
  }

}