import { Injectable, } from '@angular/core';
import { user } from '../models/user.model';
import { Http_Requests } from '../http_request.service'; 

@Injectable()

export class UserHandlerService{
	user: user;
	constructor(private http_requests: Http_Requests) {
	}

	public getUser(userId: string){
		console.log('usuarioEnviado',userId);
		this.http_requests.postService({'idUsuario': userId},'cargarUsuario')
		.then(response => {
			console.log(response);
			this.user=response;

		})
		.catch(error => {
			console.log(error);
		})
	}
}