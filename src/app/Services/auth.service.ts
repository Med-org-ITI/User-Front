import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public user: HttpClient) {}
  AuthURL = 'http://localhost:8000/auth';

  AddUser(newUser: any) {
    return this.user.post(this.AuthURL + '/signup', newUser);
  }
  Login(user: any) {
    return this.user.post(this.AuthURL + '/login', user);
  }
}
