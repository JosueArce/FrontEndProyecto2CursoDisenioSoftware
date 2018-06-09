import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdministrateHandlerService } from '../../shared/handlers/administrate.handler.service';
import { seller } from '../../shared/models/seller.model';
import { GlobalService } from '../../shared/handlers/global-service.service';
import { AuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  private user : SocialUser;
  constructor(private adminHandler: AdministrateHandlerService,private globalHandler : GlobalService) {
  	adminHandler.getSellers();

    this.globalHandler.user.subscribe({
      next : (user : any) => {
        this.user = user;          
      }
    }); 
  }

  aceptarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
      this.adminHandler.acceptDeclineRequest({idSolicitud : solicitud.idSolicitud, idUsuario : this.user.id, decision : 1});
    //else 
      //decirle al usuario que tiene que logearse primero
  }

  rechazarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
       this.adminHandler.acceptDeclineRequest({idSolicitud : solicitud.idSolicitud, idUsuario : this.user.id, decision : 0});
     //else 
      //decirle al usuario que tiene que logearse primero
  }

}
