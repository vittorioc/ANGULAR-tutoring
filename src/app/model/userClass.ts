import { UserInterface } from "./userInterface";

export class UserClass implements UserInterface {
  id: number;;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  username: string;
  password: string;
  auth: number;
  phone?: string;

  constructor(
    i: number,
    f: string,
    l: string,
    e: string,
    b: Date,
    u: string,
    pwd: string,
    a: number,
    p?: string
  ) {
    this.id = i;
    this.firstName = f;
    this.lastName = l;
    this.email = e;
    this.birthday = b;
    this.username = u;
    this.password = pwd;
    this.auth = a;
    if (p) {
      this.phone = p;
    }
  }
}
