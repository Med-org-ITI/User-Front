import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(public orderss: HttpClient) {}
  ordersURL = 'http://localhost:8000/orders';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
    }),
  };
  checkout() {
    return this.orderss.get(`${this.ordersURL}/user/create`, this.httpOptions);
  }
  // getItem(id: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
  //     }),
  //   };
  //   return this.orderss.get(`${this.itemsURL}/${id}`, httpOptions);
  // }
}
