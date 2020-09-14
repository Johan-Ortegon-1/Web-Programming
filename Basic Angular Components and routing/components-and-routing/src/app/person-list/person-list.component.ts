import { Component, OnInit } from '@angular/core';
import { PersonRepositoryService } from '../person-repository.service'
import { Person } from '../person';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons = [];
  selectedPerson: Person = new Person(0, '');
  constructor(private personRepo: PersonRepositoryService) { }
  mensaje = '';

  ngOnInit(): void {
  }

  loadPersons(){
    this.persons = this.personRepo.getPersons();
  }

  selectPerson(person: Person){
    this.selectedPerson = person;
    console.log(this.selectedPerson);
  }

  deletedPerson(id): void{
    console.log(id);
    this.mensaje = 'Eliminando la persona con id:' + id;
  }
}
