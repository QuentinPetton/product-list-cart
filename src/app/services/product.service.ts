import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductItem {
  image: {
    thunbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name:string;
  category:string;
  price:number;

}
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
