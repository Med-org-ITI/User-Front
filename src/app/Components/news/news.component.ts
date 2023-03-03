import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news: any[] = [];
  productId: any;

  constructor() {}

  ngOnInit(): void {
    // this.getNews();
  }

  // goToDetails(itemId: string): void {
  //   this.router.navigate(['/newsCards', itemId]);
  // }

  getNews() {}
}
