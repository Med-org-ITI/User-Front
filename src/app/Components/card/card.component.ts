import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  homeProducts: any[] = [];

  constructor(public myService: ProductsService) {}

  ngOnInit(): void {
    this.getHomeProducts();
  }

  getHomeProducts() {
    this.myService.getLatest(8).subscribe((res: any) => {
      this.homeProducts = res.data;
    });
  }
}
