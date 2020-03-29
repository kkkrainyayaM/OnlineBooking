import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import * as $ from 'jquery';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog) {}

  ngOnInit() {
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



@Component({
  selector: 'app-entry',
  templateUrl: './entry/entry.component.html',
  styleUrls: ['./entry/entry.component.css']
})

export class EntryComponent  implements AfterViewInit {

  loginForm = new FormGroup({
    phone: new FormControl(),
    password: new FormControl(),
  });

  registerForm = new FormGroup({
    phone: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
  });

  constructor(
    public dialogRef: MatDialogRef<EntryComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    // tslint:disable-next-line:only-arrow-functions
    $(function() {
      $('#login-form-link').click(function(e) {
        $('#login-form').delay(100).fadeIn(100);
        $('#register-form').fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });
      $('#register-form-link').click(function(e) {
        $('#register-form').delay(100).fadeIn(100);
        $('#login-form').fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });

    });
  }


  login() {
console.log(this.loginForm.get('phone').value);
  }

  register() {

  }
}
