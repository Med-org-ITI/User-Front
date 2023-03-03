import { SharedService } from './../../Services/sendData.service';
import { Component, ViewChild, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogged = localStorage.getItem('isLogged') || false;

  constructor(private router: Router, private sharedService: SharedService) {}
  @Input() isNotHome: any;
  showOverlay = false;
  @ViewChild('sideMenu') sideMenu: any;

  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

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
  logout() {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('userId');
    location.reload();
    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        location.reload();
      });
    }, 300);
  }
  showCart() {
    this.hideMenu();
    this.sharedService.emitChange('cart');
  }
  searchQuery() {
    const query = this.searchForm.controls['query'].value;
    this.router.navigate(['/shop'], { queryParams: { s: query } });
  }
}
