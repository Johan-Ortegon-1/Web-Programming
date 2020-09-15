import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons = [];
  selectedPerson: Person = new Person(0, '');
  constructor(private personRepo: PersonService) { }
  mensaje = '';

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): any{
    this.persons = this.personRepo.getPersons();
  }

  selectPerson(person: Person): any{
    this.selectedPerson = person;
    console.log(this.selectedPerson);
  }

  deletedPerson(id): void{
    console.log(id);
    this.mensaje = 'Eliminando la persona con id:' + id;
  }
}
