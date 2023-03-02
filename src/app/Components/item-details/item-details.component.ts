import { CartService } from './../../Services/cart.service';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  quantity = 1;
  item: any;
  ID: string;
  constructor(
    private clientService: ProductsService,
    private router: Router,
    myActiveRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.ID = myActiveRoute.snapshot.params['id'];
    setTimeout(() => {
      if (!this.item) {
        this.router.navigate(['/']);
      }
    }, 50);
  }
  ngOnInit(): void {
    this.clientService.getItem(this.ID).subscribe({
      next: ({ data }: any) => {
        this.item = data;
      },
      error(err) {},
    });
  }
  increase() {
    if (this.quantity < this.item.quantity) {
      this.quantity++;
    }
  }
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart() {
    this.cartService
      .addToCart(this.item._id, this.item.price, this.quantity)
      .subscribe({
        next: () => {
          this.router.navigate(['/cart']);
        },
        error(err) {},
      });
  }
}
