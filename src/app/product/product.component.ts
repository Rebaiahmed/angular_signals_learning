import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  searchQuery: string = '';
  constructor(private productService: ProductService) {}

  // Get the filtered products from the service
  get filteredProducts() {
    return this.productService.getFilteredProducts();
  }

  // Update the search query when user types
  onSearchChange(query: string) {
    this.productService.updateSearchQuery(query);
  }


}
