import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight.control',
  templateUrl: './flight.control.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AddFlight() {

  }
}

@Component({
  selector: 'app-flight.passengers',
  templateUrl: './flight.passengers/flight.passengers.component.html',
  styleUrls: ['./flight.control.component.css']
})
export class FlightPassengersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
