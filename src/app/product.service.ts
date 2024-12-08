import { computed, Injectable, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 600 },
    { id: 3, name: 'Headphones', price: 200 },
    { id: 4, name: 'Keyboard', price: 80 },
    { id: 5, name: 'Mouse', price: 40 },
  ]);

  constructor() { }

  // Signal for search query
  private searchQuery = signal<string>('');

  // Computed signal to filter products based on search query
  filteredProducts = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.products().filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  });

   // Method to update search query
   updateSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  // Expose filtered products
  getFilteredProducts() {
    return this.filteredProducts;
  }

  // Expose search query signal
  getSearchQuery() {
    return this.searchQuery;
  }
}
