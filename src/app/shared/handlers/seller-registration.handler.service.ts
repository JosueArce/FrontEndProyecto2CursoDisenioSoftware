import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { seller } from '../models/seller.model';

@Injectable()
export class SellerRegistrationHandlerService{
	sellerList: Array<seller>;
	constructor(private http_request: Http_Requests){
		this.sellerList=new Array<seller>();
	}

	public sendSellerRequest(request: sellerRequest){
		this.http_request.postService(request, 'SolicitarVender')
		.then(response => {
			console.log("funciona!");
		})
		.catch(error => {
			console.log('Error: ',error);
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
}
