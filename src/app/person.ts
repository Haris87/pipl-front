export class Person {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    dob?: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }
}
