import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(public item: HttpClient) {}
  BaseURL = 'http://localhost:3000/items';
  getItem(id: string) {
    return this.item.get(`${this.BaseURL}/${id}`);
  }
}
