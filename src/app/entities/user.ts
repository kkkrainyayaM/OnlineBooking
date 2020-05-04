import {Role} from './role';

export class User {
  role: Role;
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  token?: string;
}
