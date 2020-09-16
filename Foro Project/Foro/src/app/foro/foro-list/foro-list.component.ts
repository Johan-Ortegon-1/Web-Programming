import { Component, OnInit } from '@angular/core';
import { Foro } from '../shared/foro';
import { ForoService } from '../shared/foro.service';

@Component({
  selector: 'app-foro-list',
  templateUrl: './foro-list.component.html',
  styleUrls: ['./foro-list.component.css']
})
export class ForoListComponent implements OnInit {
  foros = [];
  mensaje = '';
  foroSeleccionado: Foro = new Foro(0, '');
  constructor(private foroRepo: ForoService) { }

  ngOnInit(): void {
    this.cargarForos();
  }

  cargarForos(): any{
    this.foros = this.foroRepo.getForos();
  }

  selectForo(foro: Foro): any{
    this.foroSeleccionado = foro;
    console.log(this.foroSeleccionado);
  }

  deletedForo(id): void{
    console.log(id);
    this.mensaje = 'Foro eliminado: ' + id;
  }

}
