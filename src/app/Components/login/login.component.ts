import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginError = '';
  constructor(public myService: AuthService, private router: Router) {}

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
  login() {
    const user = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.myService.Login(user).subscribe(
      (data: any) => {
        localStorage.setItem('isLogged', data.token);
        localStorage.setItem('userId', data.data._id);
        setTimeout(() => {
          this.router.navigate(['/']).then(() => {
            location.reload();
          });
        }, 300);
      },
      ({ error }) => (this.loginError = error.message)
    );
  }
}
