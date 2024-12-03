import { Injectable, signal } from '@angular/core';
import { VinylRecord } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = signal<VinylRecord[]>([]);
  
  addToCart(product: VinylRecord) {
    if (product.stock > 0 && this.cart().filter(item => item.id === product.id).length < product.stock) {
      this.cart.set([...this.cart(), product]);
    }
    
  }
  removeFromCart(index: number) {
    this.cart().splice(index, 1);

  }

  constructor() { }
}
