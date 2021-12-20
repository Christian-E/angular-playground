import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Movie, MovieType } from '../models/movie';
import { movies } from './data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(this.movies()).pipe(
      delay(1500)
    );
  }

  getMovie(id: string): Observable<Movie|undefined> {
    const movie = this.movies().find(m => m.id == id);
    return of(movie);
  }

  putMovie(movie: Movie): Observable<any> {
    return of(null);
  }

  private movies(): Movie[] {
    return movies.map(m => ({
      id: m.imdbID,
      name: m.Title,
      description: m.Plot,
      genre: m.Genre,
      director: m.Director,
      actors: m.Actors.split(','),
      type: m.Type as MovieType,
      posterUri: m.Images[0]
    })
    );
  }
}
