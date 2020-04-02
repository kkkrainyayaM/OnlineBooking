import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Flight} from '../../../entities/flight';

@Component({
  selector: 'app-flight.control',
  templateUrl: './flight.control.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightControlComponent implements OnInit {

  newFlight: Flight;
  flights: any = [];

  constructor(public rest: RestService) { }

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

  update() {

  }

  exit() {

  }
}

@Component({
  selector: 'app-flight.passengers',
  templateUrl: './flight.passengers/flight.passengers.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightPassengersComponent implements OnInit {

  users: any = [];
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getPassengers();
  }

  private getPassengers() {
   /* this.users = [];
    this.rest.getPassengers(id).subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });*/
  }
}
