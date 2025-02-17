import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'product-list-cart';
}
