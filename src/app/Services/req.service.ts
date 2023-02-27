import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class REQService {
  constructor(public user: HttpClient) {}
  AuthURL = 'http://localhost:8000/auth';
  BaseURL = 'http://localhost:3000/users';
  ConURL = 'http://localhost:3000/contacts';

  AddUser(newUser: any) {
    return this.user.post(this.AuthURL + '/signup', newUser);
  }

  AddContact(newContact: any) {
    return this.user.post(this.ConURL, newContact);
  }
}
