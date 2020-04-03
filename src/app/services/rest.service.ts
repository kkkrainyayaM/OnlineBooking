import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

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
    return this.http.get(`${environment.apiUrl}/admin/flights`).pipe(
      map(this.extractData));
  }

  getUserFlights(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/flights/` + id ).pipe(
      map(this.extractData));
  }

  addFlight(flight): Observable<any> {
    console.log(flight);
    return this.http.post<any>(`${environment.apiUrl}/admin/flights`, JSON.stringify(flight), httpOptions).pipe(
      tap(_ => console.log(`added flight w/ id=${flight.id}`)),
      catchError(this.handleError<any>('addFlight'))
    );
  }

  updateFlight(id, flight) {
    return this.http.put(`${environment.apiUrl}.admin/flights/` + id, JSON.stringify(flight));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
