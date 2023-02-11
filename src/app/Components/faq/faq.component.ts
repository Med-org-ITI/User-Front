import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {

  // vari= 'What is an FAQ Page?';
  btnShow= 'What is an FAQ Page!';
  btnHide= 'What is an FAQ Page?';

  btnShow2= 'What is an FAQ Page!';
  btnHide2= 'What is an FAQ Page?';

  btnShow3= 'What is an FAQ Page!';
  btnHide3= 'What is an FAQ Page?';

  vari = this.btnHide;
  vari2= this.btnHide2;
  vari3= this.btnHide3;

  toggle(event: any) {
    if (event.target === this.vari) {
      this.vari = this.btnShow;
    } else {
      this.vari = this.btnHide;
    }
    console.log(event.target);
    console.log(this);
  }
  
  toggle1() {
    if (this.vari2 === this.btnShow2) {
      this.vari2 = this.btnHide2;
    } else {
      this.vari2 = this.btnShow2
    }
  }

  toggle2() {
    if (this.vari3 === this.btnShow3) {
      this.vari3 = this.btnHide3;
    } else {
      this.vari3 = this.btnShow3
    }
  }
}

