import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {

  public movies: Observable<Movie[]>;
  constructor(private moviesService: MoviesService) { 
    this.movies = this.moviesService.getMovies();
  }
}
