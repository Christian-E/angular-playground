import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: Observable<Movie[]>;
  constructor(private movieService: MoviesService) { 
    this.movies = this.movieService.getMovies();
  }

  ngOnInit(): void {
    
  }

}
