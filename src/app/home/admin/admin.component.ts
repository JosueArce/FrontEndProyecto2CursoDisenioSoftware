import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdministrateHandlerService } from '../../shared/handlers/administrate.handler.service';
import { seller } from '../../shared/models/seller.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
	checkForRequests;
  constructor(private adminHandler: AdministrateHandlerService) {
  	this.checkForRequests = setInterval(this.adminHandler.getSellerRequests(),3000);
  	adminHandler.getSellerRequests();
  	adminHandler.getSellers();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  	clearInterval(this.checkForRequests);
  }



}
