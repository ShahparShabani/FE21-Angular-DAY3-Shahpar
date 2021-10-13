import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log('items are:' + JSON.stringify(this.cartService.getItems()))
  }

}
