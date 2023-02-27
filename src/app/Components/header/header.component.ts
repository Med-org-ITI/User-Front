import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showOverlay = false;
  @ViewChild('sideMenu') sideMenu: any;

  hideSideMenu() {
    this.showOverlay = false;
    (this.sideMenu.nativeElement as HTMLElement).classList.remove(
      'side-menu__active'
    );
  }
  showSideMenu() {
    this.showOverlay = true;
    (this.sideMenu.nativeElement as HTMLElement).classList.add(
      'side-menu__active'
    );
  }
}
