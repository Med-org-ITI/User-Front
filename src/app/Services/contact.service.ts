import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CONService {

  constructor( public contact: HttpClient) { }

  ConURL = 'http://localhost:3000/contacts';

  AddContact(newContact:any) {
    return this.contact.post(this.ConURL, newContact);
  }
}
