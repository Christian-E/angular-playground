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

  public addToWatchlist(movie: Movie): Observable<any> {
      if (!this.watchlist.includes(movie.id)) {
        this.watchlist.push(movie.id);
      }
      return of(null);
  }

  public removeFromWatchlist(movie: Movie): Observable<any> {
    this.watchlist = this.watchlist.filter(m => m != movie.id);
    return of(null);
  }

  public isOnWatchlist(movie: Movie): Observable<boolean> {
    return of(this.watchlist.includes(movie.id));
  }
}
