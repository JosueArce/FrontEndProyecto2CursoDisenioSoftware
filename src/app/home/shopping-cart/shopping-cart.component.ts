import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/handlers/cart.handler.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartHandler : CartService) { }

  ngOnInit() {
  }

}
