import { Component } from '@angular/core';
import {User} from './entities/user';
import {AuthenticationService} from './services';
import {Role} from './entities/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseWork6';
  currentUser: User;

  constructor(
    private  authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
}
