import {Component, OnInit} from '@angular/core';
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
  users: User[] = [];

  constructor(public rest: RestService, private userService: UserService) {
  }

  ngOnInit() {
    this.loading = true;
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  delete(id) {
    this.userService.deleteUser(id)
      .subscribe(res => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
