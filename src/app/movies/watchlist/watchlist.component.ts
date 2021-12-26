import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  public watchlistMovies: Observable<Movie[]>;
  constructor(private moviesService: MoviesService, private watchlistService: WatchlistService) { 
    const movies$ = this.moviesService.getMovies();
    const watchlist$ = this.watchlistService.getWatchlist();

    const watchlistMovies$: Observable<Movie[]> = forkJoin([movies$, watchlist$]).pipe(
      map(
        data => {
          const movies: Movie[] = data[0];
          const watchlist: string[] = data[1];
          return movies.filter(m => watchlist.includes(m.id));
        }
      )
    );
    this.watchlistMovies = watchlistMovies$;
  }

  ngOnInit(): void {
  }

}
