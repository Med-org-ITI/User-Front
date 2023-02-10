import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQService } from 'src/app/Services/req.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public myService: REQService) {}

  get emailValid() {
    return this.loginForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.loginForm.controls['password'].valid;
  }
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(16),
      Validators.required,
    ]),
  });
}
