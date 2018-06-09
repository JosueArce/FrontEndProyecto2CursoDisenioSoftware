import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { seller } from '../models/seller.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SellerRegistrationHandlerService{
	sellerList: Array<seller>;
	constructor(private http_request: Http_Requests,private snackBar: MatSnackBar){
		this.sellerList=new Array<seller>();
	}

	openSnackBar(message: string, action: string) {
	    this.snackBar.open(message, action, {
	        duration: 2000,
	    });
	}

	public sendSellerRequest(request: any){
		console.log(request);
		this.http_request.postService(request, 'SolicitarVender')
		.then(response => {
			this.openSnackBar("Solicitud enviada!","Ok!");
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
