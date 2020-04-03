import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Flight} from '../../../entities/flight';
import {UserService} from '../../../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flight.control',
  templateUrl: './flight.control.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightControlComponent implements OnInit {

  newFlight: Flight;
  flights: any = [];

  constructor(public rest: RestService, private router: Router) {
  }

  ngOnInit() {
    this.getFlights();
  }

  addFlight() {
    this.rest.addFlight(this.newFlight);
  }

  getFlights() {
    this.flights = [];
    this.rest.getFlights().subscribe((data: {}) => {
      console.log(data);
      this.flights = data;
    });
  }

  update(id: any, flight: any) {
    this.rest.updateFlight(id, flight); // TODO: set value to form and than to rest
  }

  exit() {

  }

  getUsers(id: number) {
    this.router.navigate(['/admin/flights', id]);
  }
}

@Component({
  selector: 'app-flight.passengers',
  templateUrl: './flight.passengers/flight.passengers.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightPassengersComponent implements OnInit {
  id: any;
  users: any = [];

  constructor(public userService: UserService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getPassengers();
  }

  private getPassengers() {
    this.users = [];
    this.userService.getUsersbyFlight(this.id).subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }
}
