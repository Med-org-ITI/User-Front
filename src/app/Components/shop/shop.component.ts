import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from './../../Services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products: any = [];
  selectedProduct: any;
  quantity = 1;
  pages: any;
  param: string;
  constructor(
    public productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.param = params['s'];
    });
  }
  ngOnInit() {
    if (this.param) {
    }
    this.productsService.getAll(1).subscribe((data: any) => {
      this.pages = data?.paginationResult;
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
    if (isProduct) {
      this.toggleProduct = true;
    } else {
      this.toggleProduct = false;
      this.cartService.addToCart(item._id, item.price, 1).subscribe();
    }
    this.toggleOverlay = true;
    this.selectedProduct = item;
    this.quantity = 1;
  }
  addToCart() {
    this.toggleOverlay = false;
    this.cartService
      .addToCart(
        this.selectedProduct._id,
        this.selectedProduct.price,
        this.quantity
      )
      .subscribe();
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
  paginate(page: number) {
    this.productsService.getAll(page).subscribe((data: any) => {
      this.pages = data?.paginationResult;
      this.products = data?.data;
    });
  }
}
