import { Component, OnInit } from '@angular/core';
import {User} from '../../entities/user';
import {first} from 'rxjs/operators';
import {UserService} from '../../services';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
   /* this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });*/
  }

}