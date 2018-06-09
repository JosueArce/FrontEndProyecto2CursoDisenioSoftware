import { Injectable, } from '@angular/core';
import { user } from '../models/user.model';
import { Http_Requests } from '../http_request.service'; 

@Injectable()

export class UserHandlerService{
	public user: user;
	constructor(private http_requests: Http_Requests) {
		this.user = {
			idUsuario : '',
			nombre : '',
			apellido : '',
			nComercio : '',
			email : '',
			tipoUsuario : 1,
			fechaRegistro : new Date(),
			estado : 0
		};
	}

	public getUser(userId: string){
		this.http_requests.postService({'idUsuario': userId},'cargarUsuario')
		.then(response => {
			this.user=response[0];
			console.log(this.user);
		})
		.catch(error => {
			console.log(error);
		})
	}
}