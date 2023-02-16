import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
}
