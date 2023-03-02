import { Component } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  homeProducts: any[] = [];

  constructor(public myService: HomeService) {}

  ngOnInit(): void {
    this.getHomeProducts();
  }

  getHomeProducts() {
    this.myService.DispalyHomeProducts().subscribe((res: any) => {
      this.homeProducts = res;
    });
  }
}
