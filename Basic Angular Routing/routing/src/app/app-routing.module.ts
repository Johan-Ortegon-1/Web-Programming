import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonViewComponent } from './person/person-view/person-view.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

const routes: Routes = [
  { path: 'person/list', component: PersonListComponent },
  { path: 'person/view/:id', component: PersonViewComponent },
  { path: 'person/edit/:id', component: PersonEditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'person/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

