import { Component } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss'],
})
export class NewsCardsComponent {
  news: any[] = [];
  productId: any;
  items: any[] = [];

  constructor(public myService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  // goToDetails(itemId: string): void {
  //   this.router.navigate(['/newsCards', itemId]);
  // }

  getItems() {
    this.myService.getItems().subscribe((item: any) => {
      this.items = item;
    })
  }

  getNews() {
    this.myService.getNews().subscribe((res: any) => {
      this.news = res;
    });
  }
}
