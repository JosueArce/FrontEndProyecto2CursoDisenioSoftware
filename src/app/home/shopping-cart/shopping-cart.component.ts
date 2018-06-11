import { Component } from '@angular/core';
import { CartService } from '../../shared/handlers/cart.handler.service';
import { GlobalService } from '../../shared/handlers/global-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{

  constructor(private cartHandler : CartService, private globalHandler : GlobalService) { }

  
}
