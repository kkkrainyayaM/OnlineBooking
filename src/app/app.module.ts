import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EntryComponent, HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/content-wrapper/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import {BookingFlightComponent, BookingFormComponent} from './components/content-wrapper/booking-form/booking-form.component';
import { InfContentComponent } from './components/content-wrapper/inf-content/inf-content.component';
import { ContactContentComponent } from './components/content-wrapper/contact-content/contact-content.component';
import { PricingComponent } from './components/content-wrapper/pricing/pricing.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {User} from './entities/user';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent,
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
    HomeComponent,
    EntryComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  entryComponents: [
    EntryComponent,
    BookingFlightComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
