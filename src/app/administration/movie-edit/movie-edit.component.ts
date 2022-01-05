import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieType } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  public movie: Movie|undefined = undefined;

  public MovieType = MovieType;

  get movieActors(): string {
    return this.movie?.actors.join(',') || '';
  }

  set movieActors(actors: string) {
    if(this.movie) {
      this.movie.actors = actors.split(',');
    }
  }

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.moviesService.getMovie(id).subscribe(
        data => {
          this.movie = data;
        },
        error => console.error(error)
      )
    }
  }

  public save(): void {
    if(this.movie) {
      this.moviesService.putMovie(this.movie).subscribe(
        () => {
          this._snackBar.open('Successfully saved.', undefined, {duration: 5000});
        }
      );
    }
  }
}
