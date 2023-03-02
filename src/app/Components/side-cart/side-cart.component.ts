import { CartService } from 'src/app/Services/cart.service';
import { SharedService } from './../../Services/sendData.service';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss'],
})
export class SideCartComponent {
  showOverlay = false;
  cart: any;
  @ViewChild('sideCart') sideCart: any;
  constructor(
    private sharedService: SharedService,
    private clientService: CartService
  ) {
    this.sharedService.changeEmitted$.subscribe((show) => {
      if (show == 'cart') {
        this.clientService.getCart().subscribe({
          next: ({ data }: any) => {
            this.cart = data;
          },
          error(err) {},
        });
        this.showOverlay = true;
        (this.sideCart.nativeElement as HTMLElement).classList.add(
          'side-cart__active'
        );
      }
    });
  }

  hideCart() {
    this.showOverlay = false;
    (this.sideCart.nativeElement as HTMLElement).classList.remove(
      'side-cart__active'
    );
  }
}
