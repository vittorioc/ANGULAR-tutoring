export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  username: string;
  password: string;
  auth: number;
  phone?: string;
}
