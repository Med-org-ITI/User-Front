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
import { LoginComponent } from './Components/login/login.component';
import { ErrorComponent } from './Components/error/error.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {DialogBodyComponent} from './dialog-body/dialog-body.component';
// import {MatButtonModule} from '@angular/material/button';
// import {MatDialogModule} from '@angular/material/dialog';

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
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
