import { ProductsService } from './../../Services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products: any = [];
  selectedProduct: any;
  quantity = 1;
  constructor(public myService: ProductsService) {}
  ngOnInit() {
    this.myService.getAll().subscribe((data: any) => {
      this.products = data?.data;
    });
  }
  toggleOverlay = false;
  toggleProduct = false;
  currentCate = 'All';
  categories = [
    'All',
    'Sanitizer',
    'Medical Equipment',
    'Gloves',
    'Drops',
    'Capsules',
    'Liquid',
  ];
  toggleClose(): void {
    this.toggleOverlay = false;
  }
  addOverlay(item: any, isProduct?: boolean): void {
    isProduct ? (this.toggleProduct = true) : (this.toggleProduct = false);
    this.toggleOverlay = true;
    this.selectedProduct = item;
    this.quantity = 1;
  }
  increase() {
    if (this.quantity < this.selectedProduct?.quantity) {
      this.quantity++;
    }
  }
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
