export class Passenger {
  id: number;
  userId: number;
  flightId: number;
  departurePoint: string;
  arrivalPoint: string;
  firstName: string;

  constructor(userId: number, flightId: number, departurePoint: string, arrivalPoint: string) {
    this.userId = userId;
    this.flightId = flightId;
    this.departurePoint = departurePoint;
    this.arrivalPoint = arrivalPoint;
  }
}
