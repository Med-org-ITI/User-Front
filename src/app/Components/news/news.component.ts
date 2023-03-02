import { Component } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news: any[] = [];
  productId: any;

  constructor(public myService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  // goToDetails(itemId: string): void {
  //   this.router.navigate(['/newsCards', itemId]);
  // }

  getNews() {
    this.myService.getNews().subscribe((res: any) => {
      this.news = res;
    });
  }
}
