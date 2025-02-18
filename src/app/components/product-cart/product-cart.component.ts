import { Component, Input } from '@angular/core';
import { ProductItem } from '../../models/product-item';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  imports: [DecimalPipe],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
  standalone: true
})
export class ProductCartComponent {
  @Input() product!: ProductItem;
}
