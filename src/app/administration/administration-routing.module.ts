import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';

const routes: Routes = [
  { path: '', component: MoviesAdminComponent },
  { path: ':id', component: MovieEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
