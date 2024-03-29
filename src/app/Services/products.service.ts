import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
    // return this.http.get('Projectsrcappcomponentsproductsproducts.json');
  }
  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductsByCategory(keyword:string) {
    return this.http.get("https://fakestoreapi.com/products/category/"+keyword);
  }
}