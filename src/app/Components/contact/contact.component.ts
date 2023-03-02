import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  fName = '';
  email: any;
  lName = '';
  city: any;
  message: any;

  constructor(public myService: AuthService) {}

  myContactForm = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    city: new FormControl('', Validators.minLength(4)),
    message: new FormControl('', Validators.minLength(20)),
  });

  get fNameValid() {
    return this.myContactForm.controls['fName'].valid;
  }

  get lNameValid() {
    return this.myContactForm.controls['lName'].valid;
  }

  get emailValid() {
    return this.myContactForm.controls['email'].valid;
  }

  get cityValid() {
    return this.myContactForm.controls['city'].valid;
  }

  get messageValid() {
    return this.myContactForm.controls['message'].valid;
  }

  AddCon() {
    let contact = {
      fName: this.myContactForm.controls['fName'],
      lName: this.myContactForm.controls['lName'],
      email: this.myContactForm.controls['email'],
      city: this.myContactForm.controls['city'],
      message: this.myContactForm.controls['message'],
    };

    if (
      this.fNameValid &&
      this.lNameValid &&
      this.emailValid &&
      this.cityValid &&
      this.messageValid
    ) {
      // this.myService.AddContact(contact).subscribe();
      console.log(this.myContactForm.value);
    }
  }

  reset() {
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.city = '';
    this.message = '';
  }
}
