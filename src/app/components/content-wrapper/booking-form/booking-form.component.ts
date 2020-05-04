import {Component, Inject, Input, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {RestService} from '../../../services/rest.service';
import {Search} from '../../../entities/search';
import {Passenger} from '../../../entities/passenger';
import {AuthenticationService} from '../../../services';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {

  lat = 53.8898991;
  lng = 27.55607486;
  zoom = 15;

  Points = [
    {name: 'Минск'},
    {name: 'Лунинец'},
    {name: 'Микашевичи'},
    ];

  form = new FormGroup({
    departurePoint: new FormControl(),
    arrivalPoint: new FormControl(),
    date: new FormControl(),
    numberOfPlaces: new FormControl()
  });

  public flights: Array<Flight> = [];

  public search: Search;

  constructor(
    public dialog: MatDialog,
    public restService: RestService) {
  }

  openDialog(flight: Flight): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    dialogConfig.data = {
      bookedFlight: flight
    };
    this.dialog.open(BookingFlightComponent, dialogConfig);
  }

  ngOnInit() {}

  onSubmit(): void {
    this.flights = [];
    const formValue = this.form.value;
    this.search = {
      arrivalPoint: formValue.arrivalPoint.name,
      departurePoint: formValue.departurePoint.name,
      numberOfPlaces: formValue.numberOfPlaces,
      date: formValue.date
    };
    this.restService.addSearch(this.search).subscribe((data: []) => {
      this.flights = data;
      console.log('submit');
      console.log(this.flights);
    });
  }
}


@Component({
  selector: 'app-booking-flight',
  templateUrl: './booking-flight/booking-flight.component.html',
  styleUrls: ['./booking-flight/booking-flight.component.css']
})
export class BookingFlightComponent {
  flight: Flight;
  arrivalPoint: string;
  point: string;
  cost: number;
  places: number;

  passenger: Passenger;


  constructor(
    private dialogRef: MatDialogRef<BookingFlightComponent>,
    public restService: RestService,
    private authenticationService: AuthenticationService,
    @Inject(MAT_DIALOG_DATA) data) {

    this.flight = data.bookedFlight;
    console.log(this.flight);
    this.places = 1;
    if (data.bookedFlight.departurePoint === 'Минск') {
       this.point = 'Автовокзал Центральный г.Минск';
     } else if (data.bookedFlight.departurePoint === 'Лунинец') {
       this.point = 'Автовокзал г.Лунинец';
     } else { this.point = data.bookedFlight.departurePoint; }

    if ((data.bookedFlight.departurePoint === 'Минск' && data.bookedFlight.arrivalPoint === 'Лунинец')
       || (data.bookedFlight.departurePoint === 'Лунинец' && data.bookedFlight.arrivalPoint === 'Минск')) {
       this.cost = 14 * this.places;
     } else if ((data.bookedFlight.departurePoint === 'Минск' && data.bookedFlight.arrivalPoint === 'Микашевичи')
       || (data.bookedFlight.departurePoint === 'Микашевичи' && data.bookedFlight.arrivalPoint === 'Минск')) {
       this.cost = 12;
     }
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.places, this.cost);
  }

  book() {
    this.passenger = new Passenger(1, this.flight.id, this.flight.departurePoint, this.flight.arrivalPoint);

    // this.passenger.userId = this.authenticationService.currentUserValue.id;
    this.restService.addPassenger(this.passenger);
    console.log(this.passenger);
    this.dialogRef.close();
  }
}
