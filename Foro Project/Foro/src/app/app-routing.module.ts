import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForoListComponent } from './foro/foro-list/foro-list.component';
import { ForoViewComponent } from './foro/foro-view/foro-view.component';
import { ForoEditComponent } from './foro/foro-edit/foro-edit.component';

const routes: Routes = [
  { path: 'foro/foro-list', component: ForoListComponent },
  { path: 'foro/foro-view/:id', component: ForoViewComponent },
  { path: 'foro/foro-view', component: ForoViewComponent },
  { path: 'foro/foro-edit/:id', component: ForoEditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'foro/foro-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
