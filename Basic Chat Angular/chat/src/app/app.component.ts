import { Component } from '@angular/core';
import { ChatService } from './chat.service'
import { Mensaje } from './mensaje';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat';
  mensaje: Mensaje = new Mensaje();
  mensajesDeServicio: Mensaje[] = [];
  constructor(private chat: ChatService){}
  
  enviarMensaje(){
    this.chat.enviarMensaje(this.mensaje);
    this.mensaje.remitente = '';
    this.mensaje.texto = '';
    this.mensajesDeServicio = this.chat.mensajes;
    console.log(this.mensajesDeServicio);
  }
}
