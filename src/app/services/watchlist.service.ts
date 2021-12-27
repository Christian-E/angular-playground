import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  public addToWatchlist(movie: Movie): Observable<any> {
      if (!this.watchlist.includes(movie.id)) {
        this.watchlist.push(movie.id);
        this.watchlist$.next(this.watchlist);
      }
      return of(null);
  }

  public removeFromWatchlist(movie: Movie): Observable<any> {
    this.watchlist = this.watchlist.filter(m => m != movie.id);
    this.watchlist$.next(this.watchlist);
    return of(null);
  }

  public isOnWatchlist(movie: Movie): Observable<boolean> {
    return of(this.watchlist.includes(movie.id));
  }

  public getWatchlist(): Observable<string[]> {
    return this.watchlist$;
  }
}
