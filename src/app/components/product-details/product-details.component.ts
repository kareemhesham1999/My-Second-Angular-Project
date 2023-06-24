import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  backToProducts() {
    this.router.navigate(['/products']);
  }
}
