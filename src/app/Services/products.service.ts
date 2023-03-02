import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(public products: HttpClient) {}
  itemsURL = 'http://localhost:8000/items';

  getAll(page?: number) {
    return this.products.get(`${this.itemsURL}?page=${page}`);
  }
  getItem(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
      }),
    };
    return this.products.get(`${this.itemsURL}/${id}`, httpOptions);
  }
}
