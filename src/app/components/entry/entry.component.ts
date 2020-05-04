import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import * as $ from 'jquery';
import {AuthenticationService, UserService} from '../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {User} from '../../entities/user';

class Login {
  phone: string;
  password: string;

  constructor(phone: string, password: string) {
    this.phone = phone;
    this.password = password;
  }
}

@Component({
  selector: 'app-entry',
  templateUrl: '../entry/entry.component.html',
  styleUrls: ['../entry/entry.component.css']
})

export class EntryComponent implements AfterViewInit, OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  logIn: Login;
  user: User;

  constructor(
    public dialogRef: MatDialogRef<EntryComponent>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      phone: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = '/';
  }

  get fl() { return this.loginForm.controls; }

  get fr() { return this.registerForm.controls; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.logIn = new Login(this.fl.phone.value, this.fl.password.value)
    this.loading = true;
    this.authenticationService.login(this.logIn)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.user = new User(this.fr.firstname.value, this.fr.lastname.value, this.fr.phone.value);
    this.userService.register(this.user);
    this.loading = true;
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
}
