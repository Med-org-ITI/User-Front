import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public user: HttpClient) {}
  userURL = 'http://localhost:8000/users';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
    }),
  };
  getUser(id: string) {
    return this.user.get(`${this.userURL}/${id}`, this.httpOptions);
  }

  // getItem(id: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + localStorage.getItem('isLogged'),
  //     }),
  //   };
  //   return this.user.get(`${this.itemsURL}/${id}`, httpOptions);
  // }
}
