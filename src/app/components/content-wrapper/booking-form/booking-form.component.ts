import {Component, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight/flight';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';

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
  public flights: Flight[] =
    [
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'}
    ];

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getFlights(): Observable<any> {
    return this.http.get(endpoint + 'flights').pipe(
      map(this.extractData));
  }

  bookFlight(id): Observable<any> {
    return this.http.put(endpoint + 'flights/' + id, httpOptions);
  }
  ngOnInit() {
  }

  book(id: number) {

  }
}
