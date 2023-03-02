import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { ErrorComponent } from './Components/error/error.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { HomeComponent } from './Components/home/home.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ShopComponent } from './Components/shop/shop.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
import { ToTopComponent } from './components/to-top/to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    ItemDetailsComponent,
    HomeComponent,
    PrivacyComponent,
    TermsComponent,
    FAQComponent,
    ShopComponent,
    CheckoutComponent,
    AboutComponent,
    CartComponent,
    ToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
