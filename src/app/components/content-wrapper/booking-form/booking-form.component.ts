import {Component, Inject, Input, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

const endpoint = 'http://localhost:4200/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {

  Points = [
    {name: 'Минск'},
    {name: 'Лунинец'},
    {name: 'Микашевичи'},
    ];

  form = new FormGroup({
    departure: new FormControl(),
    arrival: new FormControl(),
    date: new FormControl(),
    places: new FormControl()
  });

  public flights: Flight[] =
    [
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'}
    ];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog) {
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


  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getFlights(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  ngOnInit() {}

  onSubmit(): void {
    console.log( this.form.get('departure').value, this.form.get('arrival').value,
      this.form.get('date').value, this.form.get('places').value );
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
