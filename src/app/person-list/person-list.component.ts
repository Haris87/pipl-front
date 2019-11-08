import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  constructor(private personService: PersonService) {}

  people: Person[] = [];

  ngOnInit() {
    this.personService.getPeople().subscribe(_people => {
      this.people = _people;
    });
  }
}
