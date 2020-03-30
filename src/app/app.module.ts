import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
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
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './components/admin/admin.component';
import {EntryComponent} from './components/entry/entry.component';
import {Role} from './entities/role';
import {AuthGuard} from './helpers/auth.guard';
import {AuthenticationService} from './services';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'account/:id',
    component: AccountComponent,
  },
  {
    path: 'entry',
    component: EntryComponent
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
    AccountComponent,
    HomeComponent,
    EntryComponent,
    AdminComponent,
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
