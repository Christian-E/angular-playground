import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ]
})
export class MoviesModule { }
