import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  mensaje = ''
  mensajes = []
  enviarMensaje(){
    this.mensajes.push(this.mensaje)
    this.mensaje = ''
  }
}
