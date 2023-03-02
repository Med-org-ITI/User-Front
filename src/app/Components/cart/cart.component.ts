import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: any;
  constructor(private clientService: CartService, private router: Router) {
    setTimeout(() => {
      if (!this.cart) {
        this.router.navigate(['/']);
      }
    }, 50);
  }
  ngOnInit(): void {
    this.clientService.getCart().subscribe({
      next: ({ data }: any) => {
        this.cart = data;
      },
      error(err) {},
    });
  }
  clearCart() {
    this.clientService.clearCart().subscribe({
      next: () => {
        this.cart.items = [];
        this.cart.total = 0;
      },
      error(err) {},
    });
  }
  removeCartItem(id: string, price: number, quantity: number) {
    this.clientService.removeCartItem(id, price, quantity).subscribe({
      next: () => {
        this.cart.items = this.cart.items.filter(
          (item: any) => item?.itemId._id != id
        );
      },
      error(err) {},
    });
  }
}
