import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { seller } from '../models/seller.model';

@Injectable()
export class AdministrateHandlerService {

  public solicitudes : Array<sellerRequest>;	
  public sellerList : Array<seller>;
  constructor(private http_request : Http_Requests) { 
  	this.solicitudes = new Array<sellerRequest>();
    this.sellerList = new Array<seller>();
    //setInterval(()=>{this.getSellerRequests();this.getSellers()},10000);
  }


  public getSellerRequests(){
  	this.http_request.getService('Solicitudes')
  	.then(response => {
      console.log(response);
      this.solicitudes = response[0];
    })
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }

  public getSellers(){
    this.http_request.getService('Vendedores')
    .then(response => {
      this.sellerList=response[0];
    })
    .catch(error => {
      console.log('Error: ',error);
    })
  }

  public acceptRequestSeller(request){
    this.http_request.postService(request,'decidirVendedor')
    .then(response => {
      this.getSellerRequests();
       //llamar al snackbar aqui
    })
    .catch(error => console.log("Error:",error))
  }

  public declineRequestSeller(request){
    this.http_request.deleteService(request,'decidirVendedor')
    .then(response => {console.log(response);
      //llamar al snackbar aqui
      this.getSellerRequests();
    })
    .catch(error => console.log("Error",error))
  }

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

}
