import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EntryComponent} from '../entry/entry.component';
import {User} from '../../entities/user';
import {AuthenticationService, UserService} from '../../services';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    public dialog: MatDialog, private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
  /*  this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });*/
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
