import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/springboot-crud-rest/';
;
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

  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'admin/users').pipe(
      map(this.extractData));
  }

  getFlights(): Observable<any> {
    return this.http.get(endpoint + 'admin/flights').pipe(
      map(this.extractData));
  }

  getUserFlights(id): Observable<any> {
    return this.http.get(endpoint + 'admin/flights').pipe(
      map(this.extractData));
  }

  getPassengers(id): Observable<any> {
    return this.http.get(endpoint + 'admin/flights/:id').pipe(
      map(this.extractData));
  }

  addFlight(flight): Observable<any> {
    console.log(flight);
    return this.http.post<any>(endpoint + 'admin/flights', JSON.stringify(flight), httpOptions).pipe(
      tap(_ => console.log(`added flight w/ id=${flight.id}`)),
      catchError(this.handleError<any>('addFlight'))
    );
  }

  updateUser(id, user): Observable<any> {
    return this.http.put(endpoint + 'account/' + id, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'admin/users' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
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
