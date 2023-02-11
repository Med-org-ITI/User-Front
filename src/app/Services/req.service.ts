import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class USERService {

  constructor( public user: HttpClient) { }

  BaseURL = 'http://localhost:3000/users';

  AddUser(newUser: any){
    return this.user.post(this.BaseURL, newUser);
  }
}
