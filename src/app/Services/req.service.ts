import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class REQService {

  constructor( public user: HttpClient) { }

  BaseURL = 'http://localhost:3000/users';
  // ConURL = 'http://localhost:3000/contacts';

  AddUser(newUser: any){
    return this.user.post(this.BaseURL, newUser);
  }

  // AddContact(newContact:any) {
  //   return this.user.post(this.ConURL, newContact);
  // }
}
