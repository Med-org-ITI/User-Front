import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USERService } from 'src/app/Services/req.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstName = '';
  secondName = '';
  city: any;
  email: any;
  password: any;

  constructor(public myService: USERService) { }

  myRegisterationForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    secondName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    city: new FormControl("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl("", [Validators.required, Validators.maxLength(16), Validators.minLength(6)]),
  })

  get fNameValid() {
    return this.myRegisterationForm.controls["firstName"].valid;
  }

  get lNameValid() {
    return this.myRegisterationForm.controls["secondName"].valid;
  }

  get cityValid() {
    return this.myRegisterationForm.controls["city"].valid;
  }

  get emailValid() {
    return this.myRegisterationForm.controls["email"].valid;
  }

  get passwordValid() {
    return this.myRegisterationForm.controls["password"].valid;
  }

  Add() {
    let user = {
      fName: this.myRegisterationForm.controls["firstName"],
      secondName: this.myRegisterationForm.controls["secondName"],
      city: this.myRegisterationForm.controls["city"],
      email: this.myRegisterationForm.controls["email"],
      password: this.myRegisterationForm.controls["password"]
    };

    if (this.fNameValid && this.lNameValid && this.cityValid && this.emailValid && this.passwordValid) {
      // this.myService.AddUser(user).subscribe();
      console.log(this.myRegisterationForm.value);
    }

  }

  reset(){
     this.firstName= "";
     this.secondName= "";
     this.city= "";
     this.email= "";
     this.password= "";
    }
}