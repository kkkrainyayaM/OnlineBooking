import {Component, Inject, Input, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {RestService} from '../../../services/rest.service';
import {Search} from '../../../entities/search';

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
      bookedFlight: flight,
      places: this.form.get('places').value
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
  point: string;
  cost: number;
  places: number;

  constructor(
    private dialogRef: MatDialogRef<BookingFlightComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.flight = data.bookedFlight;
    this.places = data.places;
    if (data.bookedFlight.pointDeparture === 'Минск') {
       this.point = 'Автовокзал Центральный г.Минск';
     } else if (data.bookedFlight.pointDeparture === 'Лунинец') {
       this.point = 'Автовокзал г.Лунинец';
     } else { this.point = data.bookedFlight.pointDeparture; }

    if ((data.bookedFlight.pointDeparture === 'Минск' && data.bookedFlight.pointArrival === 'Лунинец')
       || (data.bookedFlight.pointDeparture === 'Лунинец' && data.bookedFlight.pointArrival === 'Минск')) {
       this.cost = 14 * this.places;
     } else if ((data.bookedFlight.pointDeparture === 'Минск' && data.bookedFlight.pointArrival === 'Микашевичи')
       || (data.bookedFlight.pointDeparture === 'Микашевичи' && data.bookedFlight.pointArrival === 'Минск')) {
       this.cost = 12 * this.places;
     }
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.places, this.cost);
  }

  book() {

  }
}
