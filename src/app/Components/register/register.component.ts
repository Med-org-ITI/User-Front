import { CustomValidators } from './../../../validator/confirmed.validator';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name = '';
  city: any;
  email: any;
  password: any;
  confirmPassword: any;
  profilePic: any;
  signUpMsg = '';
  constructor(public myService: AuthService, private router: Router) {}

  myRegisterationForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    CustomValidators.MatchValidator('password', 'confirmPassword')
  );

  get passwordMatchError() {
    return (
      this.myRegisterationForm.getError('mismatch') &&
      this.myRegisterationForm.get('confirmPassword')?.touched
    );
  }

  get nameValid() {
    return this.myRegisterationForm.controls['name'].valid;
  }

  get cityValid() {
    return this.myRegisterationForm.controls['city'].valid;
  }

  get emailValid() {
    return this.myRegisterationForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.myRegisterationForm.controls['password'].valid;
  }
  get confirmPasswordValid() {
    return this.myRegisterationForm.controls['confirmPassword'].valid;
  }

  signup(e: Event, profileImage: any) {
    let user = {
      name: this.myRegisterationForm.controls['name'].value,
      address: this.myRegisterationForm.controls['city'].value,
      email: this.myRegisterationForm.controls['email'].value,
      password: this.myRegisterationForm.controls['password'].value,
      passwordConfirm:
        this.myRegisterationForm.controls['confirmPassword'].value,
      profileImage,
    };
    const fd = new FormData();
    fd.append('name', user.name + '');
    fd.append('address', user.address + '');
    fd.append('email', user.email + '');
    fd.append('password', user.password + '');
    fd.append('passwordConfirm', user.passwordConfirm + '');
    fd.append('profileImage', user.profileImage);

    if (
      this.nameValid &&
      this.cityValid &&
      this.emailValid &&
      this.passwordValid
    ) {
      this.myService.AddUser(fd).subscribe(
        (data) => {
          this.signUpMsg =
            'Account is created sucessfully you will be redirected';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        },
        ({ error }) => (this.signUpMsg = error.errors[0].msg)
      );
    }
  }
  // reset() {
  //   this.name = '';
  //   this.city = '';
  //   this.email = '';
  //   this.password = '';
  //   this.confirmPassword = '';
  // }
}
