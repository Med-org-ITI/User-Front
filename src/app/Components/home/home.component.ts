import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { SharedService } from 'src/app/Services/sendData.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from 'swiper';
// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.emitChange(false);
  }
  ngOnDestroy() {
    this.sharedService.emitChange(true);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const currentScroll = window.pageYOffset;
    const news = document.querySelector('.news__header') as HTMLElement;
    if (currentScroll > 520) {
      news.style.marginTop = '14rem';
    } else {
      news.style.marginTop = '0';
    }
  }
}
