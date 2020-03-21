import {Component, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {
  public flights: Flight[] =
    [
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'},
      {id: 1, timeDeparture: '08:00', timeArrival: '11:00', pointDeparture: 'Лунинец', pointArrival: 'Минск'}
    ];

  searchOption = [];
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getPosts(): Observable < Flight[] > {
  return this.http.get<Flight[]>(this.postUrl);
}

ngOnInit() {}

}
