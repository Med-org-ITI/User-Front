import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    myActiveRoute: ActivatedRoute
  ) {
    this.ID = myActiveRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.clientService.getItem(this.ID).subscribe({
      next: ({ data }: any) => {
        this.item = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
