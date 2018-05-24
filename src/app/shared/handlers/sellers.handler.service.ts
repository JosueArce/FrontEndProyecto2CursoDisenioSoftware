import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';


@Injectable()
export class SellersHandlerService {

  public solicitudes : Array<sellerRequest>;	

  constructor(private http_request : Http_Requests) { 
  	this.solicitudes = new Array<sellerRequest>();
  }



  public getSellerRequests(){
  	this.http_request.getService('Solicitudes')
  	.then(response => {this.solicitudes = response})
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }

  public sendSellerRequest(request : sellerRequest){
  	this.http_request.postService(request,'insertarSolicitud')
  	.then(response => {//funcionó!!
  	})
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }


}
