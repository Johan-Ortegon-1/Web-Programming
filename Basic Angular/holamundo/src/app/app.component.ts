import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hola mundo!!!!';
  parrafo: string = 'Buenas noches bb'
  personas = ['Nombre1', 'Nombre2', 'Nombre3', 'Nombre4']
  mensaje = ''
  onClickButtom(){
    this.mensaje = 'You pressed me'
  }
  nombre = '';
  processName(){
    console.log(this.nombre)
    this.formularioenviado = true;
  }
  formularioenviado = false;
}
