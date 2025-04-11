import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../interfaces/cart.interface';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent implements OnInit {
  
  movie!: Movie;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'dateTime', 
    'availableSeats', 
    'status', 
    'price', 
    'actions'
  ];
  
  constructor(private route: ActivatedRoute, 
              private movieService: MovieService, 
              private cartService: CartService) {}

  ngOnInit(): void {  
    const id = Number(this.route.snapshot.paramMap.get('id'));  //* Hvatamo vrednost id filma iz URL-a
    this.movie = this.movieService.getMovieById(id)!;
    this.initializeDataSource();
  }

  private initializeDataSource(){
    this.dataSource = new MatTableDataSource(
      this.movie.projections.map(proj => ({
        ...proj,
        dateTime: proj.dateTime.toLocaleString(),
        price: this.movie.price
      }))
    );
  }
  reserveProjection(projection: any): void{
    if (projection.availableSeats > 0) {
      const cartItem: CartItem = {
        movieId: this.movie.id,
        projectionId: projection.id,
        title: this.movie.title,
        dateTime: new Date(projection.dateTime),
        price: this.movie.price,
        quantity: 1,
        status: 'reserved'
      };
  
      this.cartService.addToCart(cartItem);
      projection.availableSeats--;
      this.dataSource.data = [...this.dataSource.data];
    }

  }
}
