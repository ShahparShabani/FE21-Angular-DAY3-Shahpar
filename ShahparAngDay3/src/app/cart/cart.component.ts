import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any;
  checkoutForm : any;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    console.log('cart: ' + JSON.stringify(this.items));
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData : any) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
