import { Component } from '@angular/core';
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'product-list-cart';
}
