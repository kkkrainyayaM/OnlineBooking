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
import { FormsModule } from '@angular/forms';
import { BookingFlightComponent } from './components/booking-flight/booking-flight.component';

const appRoutes: Routes = [
  {
    path: 'flights',
    component: BookingFormComponent,
    data: { title: 'Flights List' }
  },
  {
    path: 'flight-book/:id',
    component: BookingFlightComponent,
    data: { title: 'Flight book' }
  },
  { path: '',
    redirectTo: '/flights',
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
    BookingFlightComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
