import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})


export class MovieCardComponent {

  ngOnInit(){
    if (!this.movie){
      console.error('Movie input is required!');
    }
  }

  @Input() movie!: Movie;
  @Output() reservation = new EventEmitter<{movieId: number, tickets: number}>();

  ticketCount: number = 1;

  getFormattedDate(date: Date){
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  addToCart(){
    if(this.ticketCount > 0){
      this.reservation.emit({
        movieId: this.movie.id,
        tickets: this.ticketCount
      });
    }
  }




}

/*
// movie-card.component.ts
import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  ticketCount: number = 1;

  getFormattedDate(date: Date): string {
    return new Date(date).toLocaleDateString('sr-Latn', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  addToCart() {
    // Логика за додавање у корпу
    console.log(`Reserving ${this.ticketCount} tickets for ${this.movie.title}`);
  }
}
*/