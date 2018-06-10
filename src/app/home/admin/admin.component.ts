import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdministrateHandlerService } from '../../shared/handlers/administrate.handler.service';
import { seller } from '../../shared/models/seller.model';
import { GlobalService } from '../../shared/handlers/global-service.service';
import { MatSnackBar } from '@angular/material';
import { LoginModalService } from '../../login/loginModal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy{
  public interval : any;
  constructor(private loginHandler:LoginModalService ,public snackBar: MatSnackBar,private adminHandler: AdministrateHandlerService,private globalHandler : GlobalService) {
  	this.interval = setInterval(()=>{this.adminHandler.getSellerRequests();this.adminHandler.getSellers()},5000);
  }

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
    });
  }

  aceptarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
      {if(solicitud.tipoSolicitud == 0)
                  this.adminHandler.acceptRequestCategory({idSolicitud : solicitud.idSolicitud,categoria: solicitud.descripcion,decision : 1});
            else if(solicitud.tipoSolicitud == 1)
              this.adminHandler.acceptRequestSeller({idSolicitud : solicitud.idSolicitud, idUsuario : solicitud.idVendedor, decision : 1});            
            this.openSnackBar("Solicitud aceptada!","OK!");}
    else this.loginHandler.openDialog();
  }

  rechazarSolicitud(solicitud){
    if(this.globalHandler.loggedIn)
      {if(solicitud.tipoSolicitud == 0)
              this.adminHandler.declineRequestCategory({idSolicitud : solicitud.idSolicitud,categoria:solicitud.descripcion, decision : 0});
            else if(solicitud.tipoSolicitud == 1)
             this.adminHandler.declineRequestSeller({idSolicitud : solicitud.idSolicitud, idUsuario : solicitud.idVendedor, decision : 0});
            this.openSnackBar("Solicitud rechazada!","OK!");}
    else this.loginHandler.openDialog();
      
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
