import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  toggleOverlay=false;
  toggleProduct=false ;

  toggleClose(): void {
    this.toggleOverlay=false;
  }
  addOverlay(isProduct?:boolean):void{
    isProduct?this.toggleProduct=true:this.toggleProduct=false;
  this.toggleOverlay=true;  
  
 }
}
