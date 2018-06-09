import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { seller } from '../models/seller.model';

@Injectable()
export class AdministrateHandlerService {

  public solicitudesVendedores : Array<sellerRequest>;	
  public sellerList : Array<seller>;
  constructor(private http_request : Http_Requests) { 
  	this.solicitudesVendedores = new Array<sellerRequest>();
    this.sellerList = new Array<seller>();
    setInterval(()=>{this.getSellerRequests();this.getSellers()},10000);
  }



  public acceptSellerRequest(request){

  }

  public getSellerRequests(){
  	this.http_request.getService('Solicitudes')
  	.then(response => {
      this.solicitudesVendedores = response;
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

  public acceptDeclineRequest(request){
    this.http_request.postService(request,'decidirVendedor')
    .then(response => {console.log(response);
       //llamar al snackbar aqui
    })
    .catch(error => console.log("Error:",error))
  }

  public deleteSeller(sellerID){
    this.http_request.postService(sellerID,'borrarVendedor')
    .then(response => {
      //llamar al snackbar aqui
    })
    .catch(error => console.log("Error",error))
  }

}
