import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { FAQComponent } from './Components/faq/faq.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductsComponent } from './Components/products/products.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Components/home/home.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    FAQComponent,
    ShopComponent,
    ProductsComponent,
    CardComponent,
    HomeComponent,
    FeedbackComponent,
    CheckoutComponent,
    ShopPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
