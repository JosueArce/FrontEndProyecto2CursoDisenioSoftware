import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { seller } from '../models/seller.model';

@Injectable()
export class AdministrateHandlerService {

  public solicitudes : Array<sellerRequest>;	
  public solicitudesEmitter : EventEmitter<any> = new EventEmitter<any>();
  public sellerList : Array<seller>;
  public sellerListEmitter : EventEmitter<any> = new EventEmitter<any>();
  constructor(private http_request : Http_Requests) { 
  	this.solicitudes = new Array<sellerRequest>();
    this.sellerList = new Array<seller>();
  }


  //permite obtener las solicitudes de existentes
  public getSellerRequests(){
  	this.http_request.getService('Solicitudes')
  	.then(response => {
      for (var i = response[0].length - 1; i >= 0; i--) {
        if(response[0].estado == 1)
          this.solicitudes.push(response[0]);
      }
      this.solicitudesEmitter.emit(this.solicitudes);
      //this.solicitudes = response[0];
    })
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }

  //obtiene los vendedores actuales
  public getSellers(){
    this.http_request.getService('Vendedores')
    .then(response => {
      this.sellerListEmitter.emit(response[0]);
      this.sellerList=response[0];
    })
    .catch(error => {
      console.log('Error: ',error);
    })
  }

  //acepta las solicitudes de vendedor
  public acceptRequestSeller(request){
    this.http_request.postService(request,'decidirVendedor')
    .then(response => {
      this.getSellerRequests();
       //llamar al snackbar aqui
    })
    .catch(error => console.log("Error:",error))
  }

  //rechaza solicitud de vendedor
  public declineRequestSeller(request){
    this.http_request.deleteService(request,'decidirVendedor')
    .then(response => {console.log(response);
      //llamar al snackbar aqui
      this.getSellerRequests();
    })
    .catch(error => console.log("Error",error))
  }

  //acepta las solicitudes de categorias
  public acceptRequestCategory(request){
    this.http_request.postService(request,'decidirCategoria')
    .then(response => {console.log(response);
       //llamar al snackbar aqui
       this.getSellerRequests();
    })
    .catch(error => console.log("Error:",error))
  }

  public declineRequestCategory(request){
    this.http_request.deleteService(request,'decidirCategoria')
    .then(response => {
      //llamar al snackbar aqui
      this.getSellerRequests();
    })
    .catch(error => console.log("Error",error))
  }

  public deleteSeller(request){
    this.http_request.deleteService(request,'devolverVendedor')
    .then(response => {
      //llamar al snackbar aqui
      this.getSellers();
    })
    .catch(error => console.log("Error",error))
  }

}
