
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CHECKOUTService } from 'src/app/Services/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  firstName = '';
  lastName = '';
  email: any;
  phone: any;
  city: any;
  state: any;
  zip: any;
  message: any;

  constructor(public myService: CHECKOUTService) { }

  myCheckoutForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^01[0125][0-9]{8}$")]),
    address: new FormControl("", [Validators.required, Validators.minLength(4)]),
    city: new FormControl("", [Validators.required, Validators.minLength(4)]),
    state: new FormControl("", [Validators.required, Validators.minLength(4)]),
    zip: new FormControl("", [Validators.required, Validators.minLength(4)]),
    message: new FormControl("", [Validators.required, Validators.minLength(4)]),
  });

  get firstNameValid() {
    return this.myCheckoutForm.controls["firstName"].valid;
  }

  get lastNameValid() {
    return this.myCheckoutForm.controls["lastName"].valid;
  }

  get emailValid() {
    return this.myCheckoutForm.controls["email"].valid;
  }

  get phoneValid() {
    return this.myCheckoutForm.controls["phone"].valid;
  }

  get addressValid() {
    return this.myCheckoutForm.controls["address"].valid;
  }

  get cityValid() {
    return this.myCheckoutForm.controls["city"].valid;
  }

  get stateValid() {
    return this.myCheckoutForm.controls["state"].valid;
  }

  get zipValid() {
    return this.myCheckoutForm.controls["zip"].valid;
  }

  get messageValid() {
    return this.myCheckoutForm.controls["message"].valid;
  }

  AddCheck() {
    let check = {
      fistName: this.myCheckoutForm.controls["firstName"],
      lastName: this.myCheckoutForm.controls["lastName"],
      email: this.myCheckoutForm.controls["email"],
      phone: this.myCheckoutForm.controls["phone"],
      city: this.myCheckoutForm.controls["city"],
      state: this.myCheckoutForm.controls["state"],
      zip: this.myCheckoutForm.controls["zip"],
      message: this.myCheckoutForm.controls["message"],
    };
    if (this.firstNameValid && this.lastNameValid && this.emailValid && this.phoneValid && this.cityValid && this.stateValid && this.zipValid && this.messageValid) {
          // this.myService.AddContact(contact).subscribe();
          console.log(this.myCheckoutForm.value);
        }
  }
}
