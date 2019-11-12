export class PiplQuery {
  first_name: string;
  last_name: string;
  raw_name: string;
  age: string;
  email: string;
  phone: string;
  username: string;
  user_id: string;
  url: string;
  middle_name: string;
  country: string;
  state: string;
  city: string;
  street: string;
  house: string;
  zipcode: string;
  raw_address: string;

  constructor(
    first_name?: string,
    last_name?: string,
    middle_name?: string,
    raw_name?: string,
    age?: string,
    email?: string,
    phone?: string,
    username?: string,
    user_id?: string,
    url?: string,
    country?: string,
    state?: string,
    city?: string,
    street?: string,
    house?: string,
    zipcode?: string,
    raw_address?: string
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.raw_name = raw_name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.user_id = user_id;
    this.url = url;
    this.middle_name = middle_name;
    this.country = country;
    this.state = state;
    this.city = city;
    this.street = street;
    this.house = house;
    this.zipcode = zipcode;
    this.raw_address = raw_address;
  }
}
