import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/content-wrapper/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { BookingFormComponent } from './components/content-wrapper/booking-form/booking-form.component';
import { InfContentComponent } from './components/content-wrapper/inf-content/inf-content.component';
import { ContactContentComponent } from './components/content-wrapper/contact-content/contact-content.component';
import { PricingComponent } from './components/content-wrapper/pricing/pricing.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookingFlightComponent } from './components/booking-flight/booking-flight.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'booking/:id',
    component: BookingFlightComponent,
    data: { title: 'Flight book' }
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContentWrapperComponent,
    BookingFormComponent,
    InfContentComponent,
    ContactContentComponent,
    PricingComponent,
    BookingFlightComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
