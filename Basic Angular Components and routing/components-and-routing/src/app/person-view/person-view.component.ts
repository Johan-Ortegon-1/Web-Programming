import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input()
  person: Person;
  
  @Output()
  personDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(): void{
    this.personDeleted.emit(this.person.id);
  }

}
