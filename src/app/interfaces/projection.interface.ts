export interface Projection {
    id: number;
    dateTime: Date;
    availableSeats: number;
    status: 'available' | 'sold_out';
}