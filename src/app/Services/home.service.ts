import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(public products: HttpClient) {}

  HomeProductURL = 'http://localhost:3000/HomeProducts';

  DispalyHomeProducts() {
    return this.products.get(this.HomeProductURL);
  }

  // getProductById(id: number) {
  //   return`${this.ProductURL}/${id}`;
  // }
}
