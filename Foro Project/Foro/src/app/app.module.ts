import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForoListComponent } from './foro/foro-list/foro-list.component';
import { ForoEditComponent } from './foro/foro-edit/foro-edit.component';
import { ForoViewComponent } from './foro/foro-view/foro-view.component';
import { TemaListComponent } from './tema/tema-list/tema-list.component';
import { TemaViewComponent } from './tema/tema-view/tema-view.component';
import { TemaEditComponent } from './tema/tema-edit/tema-edit.component';
import { ComentarioListComponent } from './comentario/comentario-list/comentario-list.component';
import { ComentarioViewComponent } from './comentario/comentario-view/comentario-view.component';
import { ComentarioEditComponent } from './comentario/comentario-edit/comentario-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ForoListComponent,
    ForoEditComponent,
    ForoViewComponent,
    TemaListComponent,
    TemaViewComponent,
    TemaEditComponent,
    ComentarioListComponent,
    ComentarioViewComponent,
    ComentarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
