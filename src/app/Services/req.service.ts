import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class REQService {

  constructor( public user: HttpClient) { }

  BaseURL = 'https://jsonplaceholder.typicode.com/users';

  AddUser(newUser: any){
    return this.user.post(this.BaseURL, newUser);
  }
}
