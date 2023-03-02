import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public products: HttpClient) {}
  cartURL = 'http://localhost:8000/cart';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
    }),
  };
  getCart() {
    return this.products.get(this.cartURL, this.httpOptions);
  }
  addToCart(itemId: string, price: number, quantity: number) {
    return this.products.post(
      `${this.cartURL}/items`,
      { itemId, price, quantity },
      this.httpOptions
    );
  }
  removeCartItem(itemId: string, price: number, quantity: number) {
    return this.products.post(
      `${this.cartURL}/remove/item`,
      { itemId, price, quantity },
      this.httpOptions
    );
  }

  clearCart() {
    return this.products.get(`${this.cartURL}/clear`, this.httpOptions);
  }
}
