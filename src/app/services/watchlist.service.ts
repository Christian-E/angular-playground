import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private watchlist: string[] = [];
  private watchlist$: BehaviorSubject<string[]>;

  constructor() {
    this.watchlist$ = new BehaviorSubject<string[]>(this.watchlist);
   }

  public addToWatchlist(movie: Movie) {
      if (!this.watchlist.includes(movie.id)) {
        this.watchlist.push(movie.id);
        this.watchlist$.next(this.watchlist);
      }
  }

  public removeFromWatchlist(movie: Movie) {
    this.watchlist = this.watchlist.filter(m => m != movie.id);
    this.watchlist$.next(this.watchlist);
  }

  public getWatchlist(): Observable<string[]> {
    return this.watchlist$;
  }

  public getIsOnWatchlist(movie: Movie): Observable<boolean> {
    return this.watchlist$.pipe(
      map(watchlist => watchlist.includes(movie.id))
    );
  }
}
