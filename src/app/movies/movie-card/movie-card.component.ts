import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie|undefined = undefined;

  public isOnWatchlist: boolean = false;

  constructor(private movieService: MoviesService, private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    if(this.movie !== undefined) {
      this.watchlistService.isOnWatchlist(this.movie).subscribe(
        data => {
          this.isOnWatchlist = data;
        },
        error => {
          console.error(error);
        }
      )
    }
  
  }

}
