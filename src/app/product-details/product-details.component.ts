import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [NgClass, NgStyle, CurrencyPipe, NgIf],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    return { strikethrough: product.discount > 0 };
  }

  addToCart(product: IProduct) {}
}
