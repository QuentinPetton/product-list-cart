import { Component, input, output } from '@angular/core';
import { ProductItem } from '../../models/product-item';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: true
})
export class CartComponent {
  // on reçoit les products du panier
  readonly cartItems = input<ProductItem[]>();

  readonly removeFromCart = output<ProductItem>();
  // Gestion du retrait de l'item du panier
  removeItemFromCart(product: ProductItem) {
    console.log('Produit retiré', product)
   // On retire l'item du panier et on notifie le parent
   this.removeFromCart.emit(product);



  }

}
