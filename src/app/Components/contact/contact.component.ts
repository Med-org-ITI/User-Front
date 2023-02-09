import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQService } from 'src/app/Services/req.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name= '';
  email:any;
  phone= '01234567890';
  city:any;
  message:any;

  constructor(public myService: REQService) { }

  myContactForm = new FormGroup ({
    name: new FormControl ("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl("", [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl("", [Validators.required, Validators.pattern("/01[012][0-9]{8}$/g")]),
    message: new FormControl("", Validators.minLength(20)),
    city: new FormControl("", Validators.minLength(20)),
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

  get cityValid(){
    return this.myContactForm.controls["city"].valid;
  }

  get messageValid(){
    return this.myContactForm.controls["message"].valid;
  }


  AddCon(){
    let contact = {
      name: this.myContactForm.controls["name"],
      email: this.myContactForm.controls["email"],
      phone: this.myContactForm.controls["phone"],
      city: this.myContactForm.controls["city"],
      message:this.myContactForm.controls["message"],
     };

    this.myService.AddContact(contact).subscribe();
  }

  reset(){
    this.name= "";
    this.email= "";
    this.phone= "";
    this.city= "";
    this.message= "";
   }

}
