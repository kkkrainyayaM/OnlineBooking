import {Role} from './role';

export class User {
  role: Role;
  id: number;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  token?: string;
}
