import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdministrateHandlerService } from '../../shared/handlers/administrate.handler.service';
import { seller } from '../../shared/models/seller.model';
import { GlobalService } from '../../shared/handlers/global-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private adminHandler: AdministrateHandlerService,private globalHandler : GlobalService) {
  	this.adminHandler.getSellers();
  }

  aceptarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
      if(solicitud.tipoSolicitud == 0)
            this.adminHandler.acceptRequestCategory({idSolicitud : solicitud.idSolicitud,categoria: solicitud.descripcion,decision : 1});
      else if(solicitud.tipoSolicitud == 1)
        this.adminHandler.acceptSellerRequest({idSolicitud : solicitud.idSolicitud, idUsuario : this.globalHandler.userData.id, decision : 1});
                
    //else 
      //decirle al usuario que tiene que logearse primero
  }

  rechazarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
      if(solicitud.tipoSolicitud == 0)
        this.adminHandler.declineRequestCategory({idSolicitud : solicitud.idSolicitud,categoria:solicitud.descripcion, decision : 0});
      else if(solicitud.tipoSolicitud == 1)
       this.adminHandler.declineRequestSeller({idSolicitud : solicitud.idSolicitud, idUsuario : this.globalHandler.userData.id, decision : 0});
     //else 
      //decirle al usuario que tiene que logearse primero
  }

}
