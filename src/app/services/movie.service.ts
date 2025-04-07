import { Injectable } from "@angular/core";
import { Movie } from "../interfaces/movie.interface";
import { Review } from "../interfaces/review.interface";

@Injectable({providedIn: 'root'})
export class MovieService{

    static dummyData: Array<Movie> = [
        // static dummyData: Movie[] = [


        {
            id: 1,
            title: 'Inception',
            imageUrl: "https://i.ebayimg.com/00/s/MTYwMFgxMDk3/z/LlUAAOSwm8VUwoRL/$_57.JPG?set_id=880000500F",
            description: 'A thief who enters the dreams of others...',
            genre: ['Action', 'Sci-Fi'],
            duration: 148,
            director: 'Christopher Nolan',
            cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
            releaseDate: new Date(2010, 6, 16),
            projections: [
                { 
                    id: 1, 
                    dateTime: new Date(2024, 2, 15, 20, 0), 
                    availableSeats: 100,
                    status: 'available'
                }
            ],
            price: 550,
            reviews: []
        },

        {
            id: 2,
            title: 'The Dark Knight',
            imageUrl: "https://theconsultingdetectivesblog.com/wp-content/uploads/2014/06/the-dark-knight-original.jpg",
            description: 'Batman vs Joker...',
            genre: ['Action', 'Drama'],
            duration: 152,
            director: 'Christopher Nolan',
            cast: ['Christian Bale', 'Heath Ledger'],
            releaseDate: new Date(2008, 6, 18),
            projections: [
                { 
                    id: 2, 
                    dateTime: new Date(2024, 1, 19, 19, 30), 
                    availableSeats: 40,
                    status: 'available'
                }
            ],
            price: 700,
            reviews: []
        },

        {
            id: 3,
            title: 'The Shawshank Redemption',
            imageUrl: "https://media.posterlounge.com/img/products/710000/706559/706559_poster.jpg",
            description: 'A banker convicted of uxoricide forms a friendship...',
            genre: ['Drama'],
            duration: 142,
            director: 'Frank Darabont',
            cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
            releaseDate: new Date(1994, 9, 10),
            projections: [
                { 
                    id: 3, 
                    dateTime: new Date(2024, 3, 16, 20, 30), 
                    availableSeats: 60,
                    status: 'available'
                }
            ],
            price: 800,
            reviews: []
        },

        {
            id: 4,
            title: "Schindler's List",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
            description: 'In German-occupied Poland during World War II...',
            genre: ['Drama', 'History'],
            duration: 195,
            director: 'Steven Spielberg',
            cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
            releaseDate: new Date(1993, 11, 30),
            projections: [
                { 
                    id: 4, 
                    dateTime: new Date(2024, 3, 16, 20, 30), 
                    availableSeats: 0,
                    status: 'sold_out'
                }
            ],
            price: 600,
            reviews: []
        },

        {
            id: 5,
            title: "Goodfellas",
            imageUrl: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2917034/5919583/MOVGB13290__32045.1679570678.jpg?c=2",
            description: 'The story of Henry Hill and his life in the mafia...',
            genre: ['Comedy', 'Action'],
            duration: 145,
            director: 'Matrtin Scorsese',
            cast: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
            releaseDate: new Date(1990, 9, 9),
            projections: [
                { 
                    id: 5, 
                    dateTime: new Date(2024, 3, 16, 20, 30), 
                    availableSeats: 40,
                    status: 'available'
                }
            ],
            price: 700,
            reviews: []
        },
    ]

    // * 1. OSNOVNE FUNKCIJE ZA RAD SA FILMOVIMA

        //? dohvatanje svih filmova za prikaz

        getAllMovies(): Movie[] {
            return MovieService.dummyData;
        }

        //? neophodno za detalje da uhvatimo pojedinacni film
    
        getMovieById(id: number): Movie | undefined {
            return MovieService.dummyData.find(movie => movie.id === id);
        }


    //* 2. PRETRAGA FILMOVA

        searchMovies(searchTerm: string, selectedGenre?: string): Movie[] {
            
            const validGenres = ['Action', 'Drama', 'Horror', 'Thriller', 'Sci-Fi', 'Romance', 'History', 'Comedy'];

            return MovieService.dummyData.filter(movie => {
                const titleMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());

                const genreMatch = selectedGenre ? validGenres.includes(selectedGenre) : true;

                return titleMatch && genreMatch;
            });
        }

    //* 3. REZERVACIJA KARATA


    //* 4. OCENJIVANJE

        addReview(){}
        // ? ovo se ne secamm sta ce mi, valjda neophodno za proveru review-a,
        // ? ako nismo gledali film ne mozemo da damo recenziju
        checkIfUserWatchedMovie(){}





}