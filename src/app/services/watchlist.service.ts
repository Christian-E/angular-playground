import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';



@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private watchlist: string[] = [];
  private watched: string[] = [];

  constructor() { }

  addToWatchlist(movie: Movie) {
      if (!this.watchlist.includes(movie.id)) {
        this.watchlist.push(movie.id);
      }
  }

  isOnWatchlist(movie: Movie): Observable<boolean> {
    return of(this.watchlist.includes(movie.id));
  }
}
