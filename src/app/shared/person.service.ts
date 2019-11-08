import { Injectable } from '@angular/core';
import { Person } from '../person';
import { of } from '../../../node_modules/rxjs/observable/of';

@Injectable()
export class PersonService {
  constructor() {}

  people: Person[] = [
    new Person(1, 'John', 'Doe'),
    new Person(2, 'Jane', 'Doe'),
    new Person(3, 'Billy', 'Doe'),
    new Person(4, 'Hector', 'Doe')
  ];

  getPeople() {
    return of(this.people);
  }

  getPerson(id) {
    return of(this.people.find(p => id === p.id));
  }
}
