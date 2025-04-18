import { Injectable } from '@angular/core';
import { Review } from '../interfaces/review.interface';

@Injectable({
    providedIn: 'root',
})
export class ReviewService {

    private reviews: Review[] = [];

    getReviewsForProjection(projectionId: number): Review[] {
        return this.reviews.filter(r => r.projectionId === projectionId);
    }

    addReview(review: Review): void {
        this.reviews.push({ ...review, id: Date.now(), date: new Date() });
    }

    getAverageRating(projectionId: number): number {
        const relevant = this.getReviewsForProjection(projectionId);
        if (relevant.length === 0) return 0;
        const total = relevant.reduce((sum, r) => sum + r.rating, 0);
        return total / relevant.length;
    }

    getReviewsForMovie(movieId: number): Review[] {
        // Ovde bi ti trebalo da imaš mapiranje projekcija po filmu
        return this.reviews.filter(r => this.projectionBelongsToMovie(r.projectionId, movieId));
    }

        private projectionBelongsToMovie(projId: number, movieId: number): boolean {
            // lookup u nekom servisu ili mapi
            return true;
        }

}