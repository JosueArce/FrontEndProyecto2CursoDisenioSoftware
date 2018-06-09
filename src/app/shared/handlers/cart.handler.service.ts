import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { UserHandlerService } from './user.handler.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  public cartElements : Array<ProductModel>;
  public backUpCartElements : Array<any>;
  public lista : Array<{id:number,cant:number}>;

  constructor(
    public snackBar: MatSnackBar, 
    private http_request: Http_Requests, 
    private userHandler: UserHandlerService) {
  	 this.cartElements = new Array<ProductModel>();
     this.backUpCartElements = new Array<any>();
     this.lista = new Array<{id:number,cant:number}>();
  }


  public pushToCartElementList(newElement : ProductModel) : void{
    for(let item in this.cartElements){
      if(this.cartElements[item].idProducto === newElement.idProducto){
        return this.openSnackBar('Ese producto ya estaba en el carrito!', 'Ok');
      }
    }
    this.http_request.postService({
      'idProducto':newElement.idProducto,
      'idUsuario':this.userHandler.user.idUsuario,
      'cantidad':1,
      'precio':newElement.precio
      },'agregarAlCarrito')
    .then(response => {
      console.log('response:',response);
    })
    .catch(error =>{
      console.log("Error: ",error)
    })
    this.cartElements.push(newElement); this.copyList(newElement);
    this.lista.push({id : newElement.idProducto, cant: 1});
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
    this.http_request.postService({
      'idUsuario':this.userHandler.user.idUsuario,
      'idProducto':producto.idProducto },'borrarDelCarrito')
    .then(response => {
      console.log('response:',response);
    })
    .catch(error =>{
      console.log("Error: ",error)
    })
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
        this.lista[item].cant=cantidadActual;
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

  openSnackBar(message: string, action: string) {
    let extraClasses=['background-grey'];
      this.snackBar.open(message, action, {
        duration: 2000,
        extraClasses: extraClasses
    });
  }

}