import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.getProductName.setValue(this.product.productName);
          this.getProductPrice.setValue(this.product.price);
          this.getPoductQuantity.setValue(this.product.quantity);
        },
      });
    }
  }

  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(10)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getProductPrice() {
    return this.productForm.controls['price'];
  }
  get getPoductQuantity() {
    return this.productForm.controls['quantity'];
  }

  formHandler(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        //////////////////  ADD
        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        //////////////////  Edit
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else {
      console.log('Errorrrrs');
    }
  }
}
