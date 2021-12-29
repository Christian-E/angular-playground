import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-admin',
  templateUrl: './movies-admin.component.html',
  styleUrls: ['./movies-admin.component.scss']
})
export class MoviesAdminComponent implements OnInit {

  public movies: Movie[] | undefined;
  public filterString: string = '';

  constructor(private moviesService: MoviesService) { 
    
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => console.error(error)
    )
  }

  public filteredMovies(): Movie[]|undefined {
    if(!this.movies || this.filterString == '') {
      return this.movies;
    }
    return this.movies.filter(m => m.name.toLowerCase().includes(this.filterString.toLowerCase()));
  }
}
