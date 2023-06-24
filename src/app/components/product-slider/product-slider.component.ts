import { Component } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent {
  imgSrcsList: string[] = ['1', '2', '3', '4', '5', '6'];
  crntImgSrc: string = this.imgSrcsList[0];
  i: number = 1;
  showNextImage() {
    if (this.i >= this.imgSrcsList.length) {
      this.i = 0;
    }
    this.crntImgSrc = this.imgSrcsList[this.i];
    this.i++;
  }
}
