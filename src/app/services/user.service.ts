import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entities/user';
import {environment} from '../../environments/environment.prod';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('http://localhost:8080/springboot-crud-rest/admin/users');
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/springboot-crud-rest/register`, user);
  }

  getById(id: number) {
    return this.http.get<User>(`http://localhost:8080/springboot-crud-rest/admin/users/${id}`);
  }

  getUsersbyFlight(id) {
    return this.http.get( `http://localhost:8080/springboot-crud-rest/flights/${id}`);
  }

  updateUser(id, user) {
    return this.http.put(`http://localhost:8080/springboot-crud-rest/account/` + id, JSON.stringify(user));
  }

  deleteUser(id) {
    return this.http.delete<any>( `http://localhost:8080/springboot-crud-rest/admin/users` + id);
  }
}
