import { Component } from '@angular/core';
import { REQService } from 'src/app/Services/req.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor (public myService: REQService){

  }

  Add(firstName: any, secondName: any, city: any, email: any, password: any){
    let user= {firstName, secondName, city, email, password};

    this.myService.AddUser(user).subscribe();
  }
}
