import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = []

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private service: CartService, private formBuilder: FormBuilder) {
    this.cart = service.getItems();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process checkout data here
    this.cart = this.service.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}