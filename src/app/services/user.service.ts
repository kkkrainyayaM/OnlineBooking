import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entities/user';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/users`, JSON.stringify(user));
  }

  login(phone: string, password: string) {
    return this.http.post(`http://localhost:8080/users/${phone}`, JSON.stringify(password));
  }

  getById(id: number) {
    return this.http.get<User>(`http://localhost:8080/users/${id}`);
  }

  getByPhone(phone: string) {
    return this.http.get<User>(`http://localhost:8080/users/${phone}`);
  }

  getPassengersOfFlight(id: number) {
    return this.http.get(`http://localhost:8080//flights/${id}/passengers/`);
  }

  updateUser(id: number, user: User) {
    return this.http.put(`http://localhost:8080/users` + id, JSON.stringify(user));
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }
}
