import { Component, OnInit } from '@angular/core';
import { Foro } from '../shared/foro';
import { ForoService } from '../shared/foro.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-foro-view',
  templateUrl: './foro-view.component.html',
  styleUrls: ['./foro-view.component.css']
})
export class ForoViewComponent implements OnInit {
  foro: Foro = new Foro(0, '');
  constructor(
    private ForoService: ForoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.foro = this.ForoService.findForo(+this.route.snapshot.paramMap.get('id'));
  }

  borrar(): void{
  }
}
