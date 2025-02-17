import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  readonly products = toSignal(this.productService.getAllProducts(),{initialValue: []})

}
