import { Role } from "./Role"; 

export class User {
  id: string;
  email: string = '';
  password: string = '';
  fullname: string = '';
  token: string = '';
  enabled: boolean = true;
  roles: Set<Role> | undefined;
  
  //Constructor
  User() {}
}
