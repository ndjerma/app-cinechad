import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../../interfaces/movie.interface';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getAllMovies();
  }
}
