import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../shared/person.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {}

  person: Person = new Person();
  id: number = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      this.personService.getPerson(id).subscribe(
        _person => {
          this.person = _person;
        },
        error => {
          console.error(error);
          // process the error
        }
      );
    });
  }
}
