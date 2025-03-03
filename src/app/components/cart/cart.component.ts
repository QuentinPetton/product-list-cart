import { Component, computed, input, output, signal } from '@angular/core';
import { ProductItem } from '../../models/product-item';
import { DecimalPipe } from '@angular/common';
import { ConfirmOrderModalComponent } from '../confirm-order-modal/confirm-order-modal.component';

@Component({
  selector: 'app-cart',
  imports: [DecimalPipe, ConfirmOrderModalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: true
})
export class CartComponent {
  readonly cartItems = input<ProductItem[]>();
  readonly removeFromCart = output<ProductItem>();
  readonly resetCart = output<void>();
  readonly isOrderModalOpen = signal(false);
  // Gestion des quantités par items et prix
  readonly itemDetails = computed(() => {
  const itemsWithPriceAndQuantity = new Map<string, {product:ProductItem; quantity: number; totalPrice: number }>();
    const cartItems = this.cartItems();
    if (!cartItems) return [];
    for (const item of cartItems) {
      if(itemsWithPriceAndQuantity.has(item.name)) {
        const itemAlreadyInCart = itemsWithPriceAndQuantity.get(item.name)!;
        itemAlreadyInCart.quantity++;
        itemAlreadyInCart!.totalPrice += item.price;
      } else {
      itemsWithPriceAndQuantity.set(item.name, {product: item, quantity: 1, totalPrice: item.price});
    }
  }
  return Array.from(itemsWithPriceAndQuantity.values());
  })
  removeItemFromCart(product: ProductItem) {
   this.removeFromCart.emit(product);
  }
  readonly cartTotalPrice = computed(() => {
  return this.itemDetails().reduce((total, item) => total + item.totalPrice, 0);
  });

  openOrderModal() {
    this.isOrderModalOpen.set(true);
  }
  closeOrderModal() {
    this.isOrderModalOpen.set(false);
    this.resetCart.emit();
  }
}
