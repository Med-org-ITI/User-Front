import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name= '';
  email:any;
  phone= '01234567890';
  message:any;

  // constructor (public myService: REQService){ }
  constructor(public myService: CONService) { }

  myContactForm = new FormGroup ({
    name: new FormControl ("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl("", [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl("", [Validators.required, Validators.pattern("")]),
    message: new FormControl("", Validators.minLength(20)),
  })

  get nameValid(){
    return this.myContactForm.controls["name"].valid;
  }

  get emailValid(){
    return this.myContactForm.controls["email"].valid;
  }

  get phoneValid(){
    return this.myContactForm.controls["phone"].valid;
  }

  get messageValid(){
    return this.myContactForm.controls["message"].valid;
  }


  AddCon(){
    let contact = {
      name: this.myContactForm.controls["name"],
      email: this.myContactForm.controls["email"],
      phone: this.myContactForm.controls["phone"],
      message:this.myContactForm.controls["message"],
     };

    this.myService.AddContact(contact).subscribe();
  }

}
