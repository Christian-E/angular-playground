import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';



@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  watchlist: string[] = [];
  watched: string[] = [];

  constructor() { }

  addToWatchlist(movie: Movie) {
      if (!this.watchlist.includes(movie.id)) {
        this.watchlist.push(movie.id);
      }
  }

  getWatchlistMovieIds(): string[] {
    return this.watchlist;
  }
}
