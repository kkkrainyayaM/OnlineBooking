import {Role} from './role';

export class User {
  role: Role;
  id: number;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  token?: string;
}
