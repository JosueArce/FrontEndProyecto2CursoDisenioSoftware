import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';

@Injectable()
export class AdministrateHandlerService {

  public solicitudes : Array<sellerRequest>;	

  constructor(private http_request : Http_Requests) { 
  	this.solicitudes = new Array<sellerRequest>();
  }



  public acceptSellerRequest(request){

  }

  public getSellerRequests(){
  	this.http_request.getService('Solicitudes')
  	.then(response => {this.solicitudes = response})
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }

}
