import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  person: Person = new Person(0, '');

  constructor(
    private PersonService: PersonService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.person = this.PersonService.finPerson(+this.route.snapshot.paramMap.get('id'));
  }

  borrar(): void{
  }

}
