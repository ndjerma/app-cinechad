export interface Review {
    id: number;
    userId: number;  
    movieId: number;    
    comment?: string;   
    createdAt: Date;   
}