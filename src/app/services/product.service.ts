import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product-item';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly dataURL = 'assets/data.json';

  getAllProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.dataURL);
  }

}
