import { computed, Injectable, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

    // Signal to store the cart products
    private cart = signal<Product[]>([]);

  constructor() { }

 // Method to add a product to the cart
 addToCart(product: Product) {
  this.cart.update((currentCart) => [...currentCart, product]);
}

// Method to remove a product from the cart by ID
removeFromCart(productId: number) {
  this.cart.update((currentCart) =>
    currentCart.filter((product) => product.id !== productId)
  );
}

 // Computed signal to calculate the total price
 totalPrice = computed(() => {
  return this.cart().reduce((acc, curr) => acc + curr.price, 0);
});

// Expose the cart as a signal for components to subscribe
getCart() {
  return this.cart;
}

// Expose the total price as a signal for components to subscribe
getTotalPrice() {
  return this.totalPrice;
}

}
