import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { ProductItem } from '../../models/product-item';
import { CartComponent } from "../cart/cart.component";


@Component({
  selector: 'app-product-list',
  imports: [ProductCartComponent, CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);
  // On récupère les produits depuis l'API qu'on convertis en Signal
  readonly products: () => ProductItem[] = toSignal(this.productService.getAllProducts(),{initialValue: []})

  // On va gérer les produits du oanbier que l'on va recevoir de product cart
  cartItems: WritableSignal<ProductItem[]> = signal([]);

  handleAddToCartButton(product:ProductItem) {
    this.cartItems.update(values => {
      return [...values, product]
    })
    console.log('Produit ajouté', product)

  }
  removeFromCart(product: ProductItem) {
    this.cartItems.update(values => {
      return values.filter(item => item.name !== product.name)
    })
  }
}
