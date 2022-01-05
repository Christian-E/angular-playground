import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient){}

  getMovies(): Observable<Movie[]> {
    const moviesUrl = baseUrl + 'movies';
    return this.http.get<Movie[]>(moviesUrl);
  }

  getMovie(id: string): Observable<Movie|undefined> {
    const movieUrl = baseUrl + 'movies/' + id;
    return this.http.get<Movie>(movieUrl);
  }

  putMovie(movie: Movie): Observable<unknown> {
    const movieUrl = baseUrl + 'movies/' + movie.id;
    return this.http.put(movieUrl, movie);
  }
}
