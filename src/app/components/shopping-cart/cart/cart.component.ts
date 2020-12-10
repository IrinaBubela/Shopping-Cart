import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, productId: 1, productName: 'Test 1', quantity: 4, price: 100 },
    { id: 2, productId: 3, productName: 'Test 3', quantity: 5, price: 50 },
    { id: 3, productId: 2, productName: 'Test 2', quantity: 3, price: 10 },
    { id: 4, productId: 4, productName: 'Test 4', quantity: 2, price: 150 }
  ];

  cartTotal = 0;

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
  }

}
