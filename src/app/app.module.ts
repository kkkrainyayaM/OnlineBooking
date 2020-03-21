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
    PricingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
