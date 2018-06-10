import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'

@Injectable()

export class Http_Requests {
	
	public apiURL:string = "https://super-daj.herokuapp.com/";
	public results : Object[];
	public options : RequestOptions;
	public headers: Headers;

	constructor(private http:Http){
		this.headers = new Headers({ 'Content-Type': 'application/json','Accept': 'q=0.8;application/json;q=0.9' });
		this.options = new RequestOptions({headers:this.headers});
	}

	/*Gets the information from the endPoint requested*/
	public getService(endPoint:string) : Promise<any>{
		return this.http
		.get(this.apiURL+endPoint,this.options)
		.toPromise()
		.then(this.extractData)
		.catch(this.handleError)
	}


	/*Inserts information through an endPoint*/
	public postService(params:any,endPoint:string) : Promise<any>{
		let body = JSON.stringify(params);
		return this.http
			.post(this.apiURL+endPoint,body,this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError)
	}

	/*Overwrite existence information with new one*/
	public putService(params:any,endPoint:string) : Promise<any>{
		let body = JSON.stringify(params);
		return this.http
			.post(this.apiURL+endPoint,body,this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError)
	} 

	/*Removes data from the DB when endPoint is called*/
	public deleteService(params:any,endPoint:string) : Promise<any>{
		let body = JSON.stringify(params);
		return this.http
			.post(this.apiURL+endPoint,body,this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError)
	}

	/*Insert the extracted data into the array and returns the results*/
	private extractData(response : Response){
		return response.json() || {};
	}

	/*Returns the error message in case of existence*/
	private handleError(error:any) : Promise<any>{
		console.log("Error Ocurred: ",error);
		return Promise.reject(error.message || error);
	}
}