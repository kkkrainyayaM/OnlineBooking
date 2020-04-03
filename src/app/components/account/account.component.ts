import {Component, OnInit} from '@angular/core';
import {User} from '../../entities/user';
import {AuthenticationService, UserService} from '../../services';
import {first} from 'rxjs/operators';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;

  flights: any = [];

  constructor(public rest: RestService, private authenticationService: AuthenticationService,
              private userService: UserService, private router: Router) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.getFlights();
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }

  getFlights() {
    this.flights = [];
    this.rest.getUserFlights(this.currentUser.id).subscribe((data: {}) => {
      console.log(data);
      this.flights = data;
    });
  }

  updateAcc() {
    this.userService.updateUser(this.currentUser.id, this.currentUser);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
