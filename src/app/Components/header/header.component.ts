import { Component, ViewChild, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isNotHome: any;
  showOverlay = false;
  @ViewChild('sideMenu') sideMenu: any;

  hideMenu() {
    this.showOverlay = false;
    (this.sideMenu.nativeElement as HTMLElement).classList.remove(
      'mobile-side-menu__active'
    );
  }
  showMenu() {
    this.showOverlay = true;
    (this.sideMenu.nativeElement as HTMLElement).classList.add(
      'mobile-side-menu__active'
    );
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const currentScroll = window.pageYOffset;
    const menu = document.querySelector('.header-nav-section') as HTMLElement;
    if (currentScroll > 520) {
      menu.classList.add('scroll-down');
      if (!this.isNotHome) menu.classList.remove('nav-home');
    } else {
      menu.classList.remove('scroll-down');
      if (!this.isNotHome) menu.classList.add('nav-home');
    }
  }

  isOpen = false;
  isOpen1 = false;
}
