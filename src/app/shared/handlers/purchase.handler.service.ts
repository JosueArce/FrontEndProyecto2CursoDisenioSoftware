import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { UserHandlerService } from './user.handler.service';
import { CartService } from './cart.handler.service';


@Injectable()
export class PurchaseService{

	public provincias : Array<any>;
	public cantones : Array<any>;
	public distritos : Array<any>;
	public comprasUsuario : EventEmitter<any> = new EventEmitter<any>();
	public idDireccion: string;
	public idCompra: string;

	constructor(private http_request: Http_Requests,private userHandler: UserHandlerService, private cartHandler: CartService){
		this.provincias = new Array<any>();
		this.cantones = new Array<any>();
		this.distritos = new Array<any>();

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
	        this.comprasUsuario.emit(response[0]);
	    })
	    .catch(error =>{
	      console.log("Error: ",error)
	    })
	}

	public insertarDireccion(idUsuario: string, idDistrito: number, dExacta: string){
		this.http_request.postService({
			'idUsuario':idUsuario, 
			'idDistrito':idDistrito,
			'dExacta':dExacta},'insertarDireccion')
		.then(response => {
			this.idDireccion=response[0].idDireccion;
		})
		.catch(error => {
			console.log('Error:',error)
		})

	}

	public realizarCompra(idUsuario: string, idDireccion: number, tipoEntrega: number, guia: string){
		this.cartHandler.getFromCartElementList();
		this.http_request.postService({
			'idUsuario':idUsuario,
			'idDireccion': idDireccion,
			'tipoEntrega':tipoEntrega,
			'guia':guia},'insertarCompra')
		.then(response => {
			this.idCompra = response[0].idCompra;
		})
		.catch(error => {
			console.log('Error: ',error);
		})
		for(let item in this.cartHandler.getFromCartElementList()){
			this.http_request.postService({
				'idCompra':Number(this.idCompra),
				'idProducto':this.cartHandler.getFromCartElementList()[item].idProducto,
				'cantidad':this.cartHandler.lista[item].cant,
				'precio':this.cartHandler.getFromCartElementList()[item].precio
				},'asociarACompra')
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		}
		

	}

}