import { Component, OnInit } from '@angular/core';
import { Iproduct, productsList } from '../models/productlist';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private ProductService: ProductService) {}
  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  // products: Iproduct[] = productsList;

  removeStudent(product: Iproduct) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
