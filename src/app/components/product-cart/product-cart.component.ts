import { Component, Input } from '@angular/core';
import { ProductItem } from '../../models/product-item';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
  standalone: true
})
export class ProductCartComponent {
  @Input() product!: ProductItem;
}
