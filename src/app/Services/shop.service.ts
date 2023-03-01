import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(public product: HttpClient) {}

  ProductURL = ' http://localhost:3000/products';

  DisplayProduct() {
    return this.product.get(this.ProductURL);
  }

  getProductById(id: number) {
    return`${this.ProductURL}/${id}`;
  }
}
