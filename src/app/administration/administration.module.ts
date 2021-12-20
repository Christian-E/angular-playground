import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { FormsModule } from '@angular/forms';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MoviesAdminComponent,
    MovieEditComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule
  ]
})
export class AdministrationModule { }
