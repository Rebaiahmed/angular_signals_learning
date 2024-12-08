import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(public cartService: CartService) {}

  // Method to add a product to the cart
  addProduct() {
    const product = {
      id: Date.now(), // Use a timestamp as a unique ID for this demo
      name: 'Sample Product',
      price: 50, // Just a sample price
    };
    this.cartService.addToCart(product);
  }

  // Method to remove a product from the cart
  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  // Get the cart products and total price
  get cart() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

}
