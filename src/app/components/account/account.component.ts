import {Component, OnInit} from '@angular/core';
import {User} from '../../entities/user/user';
import {AuthenticationService, UserService} from '../../services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
