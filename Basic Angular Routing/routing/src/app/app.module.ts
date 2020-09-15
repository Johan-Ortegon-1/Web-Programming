import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonViewComponent } from './person/person-view/person-view.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonViewComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
