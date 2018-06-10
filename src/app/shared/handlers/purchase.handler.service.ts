import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';

@Injectable()
export class PurchaseService{

	constructor(private http_request: Http_Requests){}

	public getProvincias(): Array<any>{
		let provincias=new Array<any>();
		this.http_request.getService('Provincias')
	    .then(response => {
	      console.log(response);
	      provincias= response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	    return provincias;
	}

	public getCantones(): Array<any>{
		let cantones=new Array<any>();
		this.http_request.getService('Cantones')
	    .then(response => {
	    	console.log(response);
	      cantones = response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	    return cantones;
	}

	public getDistritos(): Array<any>{
		let distritos=new Array<any>();
		this.http_request.getService('Distritos')
	    .then(response => {
	    	console.log(response);
	      distritos = response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	    return distritos;
	}

}