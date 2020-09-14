import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private mensajesArray: Mensaje[] = []
  constructor() { }

  //The services are focus on store the information
  enviarMensaje(mensaje: Mensaje){
    const copiaMensaje = Object.assign({}, mensaje)
    this.mensajesArray.push(copiaMensaje)
  }
  get mensajes(): Mensaje[]{
    return this.mensajesArray
  }
}
