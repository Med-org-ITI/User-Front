import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { HomeComponent } from './Components/home/home.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ShopComponent } from './Components/shop/shop.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'item', component: ItemDetailsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FAQComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
