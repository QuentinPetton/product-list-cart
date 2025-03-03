import { Component, input, output } from '@angular/core';
import { ProductItem } from '../../models/product-item';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-confirm-order-modal',
  imports: [DecimalPipe],
  templateUrl: './confirm-order-modal.component.html',
  styleUrl: './confirm-order-modal.component.css'
})
export class ConfirmOrderModalComponent {
  readonly cartItems = input<{product:ProductItem; quantity: number; totalPrice:number }[]>();
  readonly cartTotalPrice = input<number>();
  readonly closeOrderModal = output<void>();

  closeModal() {
    this.closeOrderModal.emit();
  }
}
