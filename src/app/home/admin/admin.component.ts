import { Component, OnInit } from '@angular/core';
import { AdministrateHandlerService } from '../../shared/handlers/administrate.handler.service';
import { seller } from '../../shared/models/seller.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminHandler: AdministrateHandlerService) {
  	adminHandler.getSellerRequests();
  	adminHandler.getSellers();
  }

  ngOnInit() {
  }

}
