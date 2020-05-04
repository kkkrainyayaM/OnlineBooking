import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Flight} from '../entities/flight';
import {Search} from '../entities/search';
import {Passenger} from '../entities/passenger';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getFlights(): Observable<any> {
    return this.http.get(`http://localhost:8080/routes`, httpOptions).pipe(
      map(this.extractData));
  }

  getUserFlights(id): Observable<any> {
    return this.http.get(`http://localhost:8080/passenger/${id}/routes` , httpOptions).pipe(
      map(this.extractData));
  }

  addFlight(flight: Flight) {
    return this.http.post(`http://localhost:8080/routes`, JSON.stringify(flight), httpOptions);
  }

  addSearch(search: Search): Observable<any> {
    console.log(JSON.stringify(search));
    return this.http.post(`http://localhost:8080/routes/search`, JSON.stringify(search), httpOptions);
  }

  updateFlight(flight: Flight) {
    return this.http.put(`http://localhost:8080/routes`, JSON.stringify(flight), httpOptions);
  }

  deleteFlight(id: number) {
    return this.http.delete(`http://localhost:8080/routes/${id}`, httpOptions);
  }

  addPassenger(passenger: Passenger) {
    console.log('passenger');
    this.http.post(`http://localhost:8080/passengers`, JSON.stringify(passenger), httpOptions);
  }
}
