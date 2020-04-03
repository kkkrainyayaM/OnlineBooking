import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entities/user';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('${environment.apiUrl}/users');
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getUsersbyFlight(id) {
    return this.http.get( `${environment.apiUrl}/flights/${id}`);
  }

  updateUser(id, user) {
    return this.http.put(`${environment.apiUrl}/account/` + id, JSON.stringify(user));
  }

  deleteUser(id) {
    return this.http.delete<any>( `${environment.apiUrl}/admin/users` + id);
  }
}
