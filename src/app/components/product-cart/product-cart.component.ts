import { Component, input, Input, output, Output, signal, WritableSignal } from '@angular/core';
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
  readonly product = input<ProductItem>();
  readonly addToCart = output<ProductItem>();


  // On gérera le bouton ajouter au panier
    // Quand on article est ajouté, le bouton indiquera la quantité et affichera icone + et - pour modifier
    productInCart: WritableSignal<boolean> = signal(false);


    addToCartButton() {
      this.productInCart.set(!this.productInCart());

      if(this.product()) {
        this.addToCart.emit(this.product()!);
      }
    }
    //todo affichage à changer sur le bouton quand productIncart = true

}
