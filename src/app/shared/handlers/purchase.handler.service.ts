import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { UserHandlerService } from './user.handler.service';


@Injectable()
export class PurchaseService{

	public provincias : Array<any>;
	public cantones : Array<any>;
	public distritos : Array<any>;
	public comprasUsuario : Array<any>;

	constructor(private http_request: Http_Requests,private userHandler: UserHandlerService){
		this.provincias = new Array<any>();
		this.cantones = new Array<any>();
		this.distritos = new Array<any>();
		this.comprasUsuario = new Array<any>();

		this.getProvincias();
		this.getCantones();
		this.getDistritos();
		this.getComprasUsuario();
	}

	//permite extraer todas las provincias de la bd
	public getProvincias(){
		this.http_request.getService('Provincias')
	    .then(response => {
	      this.provincias= response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	}

	//permite extraer todos los cantones de la bd
	public getCantones(){
		this.http_request.getService('Cantones')
	    .then(response => {	    	
	        this.cantones = response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	}

	//permite extraer todos los distritos de la BD
	public getDistritos(){
		this.http_request.getService('Distritos')
	    .then(response => {
	        this.distritos = response;
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	}

	//obtiene las compras realizadas por el usuario logeado
	public getComprasUsuario(){
		this.http_request.postService({idUsuario:this.userHandler.user.idUsuario},'ComprasUsuario')
	    .then(response => {	    	
	        console.log(response);
	        this.comprasUsuario = response[0];
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	}

}