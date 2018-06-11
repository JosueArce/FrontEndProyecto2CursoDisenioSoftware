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
	public direcciones: Array<any>;

	constructor(private http_request: Http_Requests,private userHandler: UserHandlerService, private cartHandler: CartService){
		this.provincias = new Array<any>();
		this.cantones = new Array<any>();
		this.distritos = new Array<any>();
		this.direcciones = new Array<any>();

		this.getProvincias();
		this.getCantones();
		this.getDistritos();
		this.getComprasUsuario();
		this.getDirecciones();
	}

	public getDirecciones(){
		this.http_request.postService({'idUsuario':this.userHandler.user.idUsuario},'direccionesUsuario')
		.then(response => {
			console.log(response);
			this.direcciones = response;
		})
		.catch(error => {
			console.log('Error:',error)
		})
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

	//permite realizar una compra
	public insertarDireccionCompra( idDistrito: number, dExacta: string,tipoEntrega:number,guia:string){
		this.http_request.postService({
			idUsuario:this.userHandler.user.idUsuario, 
			idDistrito:idDistrito,
			dExacta:dExacta},'insertarDireccion')
		.then(response => {
			this.realizarCompraAuxiliar(response[0][0].idDireccion,tipoEntrega,guia);
		})
		.catch(error => {
			console.log('Error:',error)
		})
	}
	
	//inserta la compra 
	private realizarCompraAuxiliar(idDireccion: number, tipoEntrega: number, guia: string){
		this.http_request.postService(
		{
			idUsuario:this.userHandler.user.idUsuario,
			idDireccion: idDireccion,
			tipoEntrega:tipoEntrega,
			guia:guia
		},'insertarCompra')
		.then(response => {
			this.asociarCompra(response[0][0].idCompra);
		})
		.catch(error => {
			console.log('Error: ',error);
		})	
	}

	//permite asociar una compra a los productos
	private asociarCompra(idCompra : number){
		for(let item in this.cartHandler.getFromCartElementList()){
			this.http_request.postService({
				idCompra:Number(idCompra),
				idProducto:this.cartHandler.getFromCartElementList()[item].idProducto,
				cantidad:this.cartHandler.lista[item].cant,
				precio:this.cartHandler.getFromCartElementList()[item].precio
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