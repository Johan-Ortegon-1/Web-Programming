import { Injectable } from '@angular/core';
import { Foro } from './foro';
@Injectable({
  providedIn: 'root'
})
export class ForoService {
  private foroArray = {
    1: new Foro(1, 'Nombre Foro 1'),
    2: new Foro(2, 'Nombre Foro 2'),
    3: new Foro(3, 'Nombre Foro 3'),
    4: new Foro(4, 'Nombre Foro 4'),
  }

  constructor() { }

  getForos(): Foro[]{
    return Object.values(this.foroArray);
  }

  findForo(id: number): Foro{
    return this.foroArray[id];
  }
}
