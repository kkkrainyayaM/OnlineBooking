import { Component, OnInit } from '@angular/core';
import {User} from '../../entities/user';
import {first} from 'rxjs/operators';
import {UserService} from '../../services';
import {RestService} from '../../services/rest.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;
  users: any = [];

  constructor(public rest: RestService, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
   /* this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });*/
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }

  delete(id) {
    this.rest.deleteUser(id)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
