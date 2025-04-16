export interface Projection {
    id: number;
    datetime: Date;
    price: number;
    status?: 'reserved' | 'watched' | 'canceled';
    userRating?: number; // od 1 do 5
}
