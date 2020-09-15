import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personArray = {
    1: new Person(1, 'Nombre 1'),
    2: new Person(2, 'Nombre 2'),
    3: new Person(3, 'Nombre 3'),
  };

  constructor() { }

  getPersons(): Person[]{
    return Object.values(this.personArray);
  }

  finPerson(id: number): Person {
    return this.personArray[id];
  }
}
