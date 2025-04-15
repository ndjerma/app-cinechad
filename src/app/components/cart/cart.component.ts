import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = [
    'title', 'date', 'price', 'quantity', 'total',
    'status', 'actions', 'demoControls' // Dodajemo demo kolonu
  ];
  dataSource = new MatTableDataSource<CartItem>([]);

  constructor(public cartService: CartService) {}

  ngOnInit(){
    this.dataSource.data = this.cartService.getCartItems();
  }

  // * Promeni status (za demo)
  setStatus(index: number, status: 'reserved' | 'watched' | 'canceled'): void {
    this.cartService.setItemStatus(index, status);
    this.dataSource.data = [...this.cartService.getCartItems()]; // Forsiraj refresh
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) { // Dodaj .toLowerCase() za slučaj razlike u veličini slova
      case 'reserved': return 'primary';
      case 'watched': return 'accent';
      case 'canceled': return 'warn';
      default: return '';
    }
  }

  // * Da li se stavka može menjati (samo "reserved")
  canEdit(item: CartItem): boolean {
    return item.status === 'reserved';
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item.movieId, item.projectionId);
    this.dataSource.data = this.cartService.getCartItems(); // * azuriram podatke
  }

  updateQuantity(item: CartItem, delta: number): void{
    const newQty = item.quantity + delta;
    if(newQty > 0){
      this.cartService.updateQuantity(item.movieId, item.projectionId, newQty)
    }
  }
}
