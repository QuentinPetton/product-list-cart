import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { ProductItem } from '../../models/product-item';


@Component({
  selector: 'app-product-list',
  imports: [ProductCartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);
  readonly products: () => ProductItem[] = toSignal(this.productService.getAllProducts(),{initialValue: []})
}
