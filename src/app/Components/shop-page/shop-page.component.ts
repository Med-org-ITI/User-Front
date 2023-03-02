import { Component } from '@angular/core';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  products: any[] = [];

  constructor(public myService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.myService.DisplayProduct().subscribe((res: any) => {
      this.products = res;
    });
  }

  toggleOverlay = false;
  toggleProduct = false;

  toggleClose(): void {
    this.toggleOverlay = false;
  }
  addOverlay(isProduct?: boolean): void {
    isProduct ? (this.toggleProduct = true) : (this.toggleProduct = false);
    this.toggleOverlay = true;
  }
}
