import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entities/user';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<User[]>('http://localhost:8080/users', httpOptions);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/users`, JSON.stringify(user), httpOptions);
  }

  login(phone: string, password: string) {
    return this.http.post(`http://localhost:8080/users/${phone}`, JSON.stringify(password), httpOptions);
  }

  getById(id: number) {
    return this.http.get<User>(`http://localhost:8080/users/${id}`, httpOptions);
  }

  getByPhone(phone: string) {
    return this.http.get<User>(`http://localhost:8080/users/${phone}`, httpOptions);
  }

  getPassengersOfFlight(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/routes/${id}/passengers`, httpOptions);
  }

  updateUser(id: number, user: User) {
    return this.http.put(`http://localhost:8080/users` + id, JSON.stringify(user), httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8080/users/${id}`, httpOptions);
  }
}
