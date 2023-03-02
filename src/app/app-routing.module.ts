import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'item', component: ItemDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
