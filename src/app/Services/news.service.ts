import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(public news: HttpClient) {}

  NewsURL = 'http://localhost:3000/news';

  getNews() {
    return this.news.get(this.NewsURL);
  }

  getItems() {
    return this.news.get(this.NewsURL);
  }
}
