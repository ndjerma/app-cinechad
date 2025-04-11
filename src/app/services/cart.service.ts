import { Injectable } from "@angular/core";
import { CartItem } from "../interfaces/cart.interface";
import { Projection } from "../interfaces/projection.interface";


@Injectable({providedIn: 'root'})

export class CartService {

    private cartItems: CartItem[] = [];
    public isDemoMode = true;   // * palimo demo rezim

    addToCart(item: CartItem): void {
        const existingItem = this.cartItems.find(i => 
            i.movieId === item.movieId &&
            i.projectionId === item.projectionId
        );

        if(existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.price = item.price; // * azuriramo cenu ako je promenjena
        } else {
            this.cartItems.push({...item, status: 'reserved'});
        }
    }

    getProjectionStatus(projection: Projection): string {
        if (projection.availableSeats === 0) return 'sold_out';
        return new Date(projection.dateTime) < new Date() ? 'watched' : 'available';
    }

    // * Vrati sve stavke (sa mock statusima ako je demo)
    getCartItems(): CartItem[] {
        if (this.isDemoMode){
            this.mockStatuses();
        }
        return this.cartItems;
    }

    // * Ručno promeni status (za demo)
    setItemStatus(index: number, status: 'reserved' | 'watched' | 'canceled'): void {
        if (this.cartItems[index]) {
            this.cartItems[index].status = status;
        }
    }

    // * Simuliraj statuse za demo
    private mockStatuses(): void {
        this.cartItems.forEach((item, index) => {
        if (index === 0) item.status = 'reserved';  // Prva stavka = rezervisano
        else if (index === 1) item.status = 'watched'; // Druga = gledano
        else if (index === 2) item.status = 'canceled'; // Treća = otkazano
        });
    }

    // * filtriramo niz tako da zadrzimo sve stavke OSIM one sa unesenim ID-jem
    // * tj tu jednu specificnu brisemo
    removeItem(movieId: number, projectionId: number): void{
        this.cartItems = this.cartItems.filter(item =>
            !(item.movieId === movieId && item.projectionId === projectionId)
        )
    }

    updateQuantity(movieId: number, projectionId: number, newQuantity: number): void{
        const item = this.cartItems.find(i =>
            i.movieId === movieId &&
            i.projectionId === projectionId
        );
        if(item) {
            item.quantity = newQuantity > 0 ? newQuantity : 1;
            // * obezbedjujemo da quantity ne moze da bude manje od 1
        }
    }

    clearCart(): void {
        this.cartItems = [];
    }

    getTotalPrice(): number {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0 );
    }

}