import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ShopComponent } from './Components/shop/shop.component';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = 
[
  {path: "register", component: RegisterComponent},
  {path: "contact", component: ContactComponent},
  {path: "privacy", component: PrivacyComponent},
  {path: "shop", component: ShopComponent},
  {path: "terms", component: TermsComponent},
  {path: "faq", component: FAQComponent},
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "checkout", component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
