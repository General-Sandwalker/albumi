import { Component, inject, input } from '@angular/core';
import { VinylRecord } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img 
        src="{{item().coverImage}}"
        alt="{{item().title}}"
        class="w-16 h-16 object-contain" 
      >
      <div class="flex flex-col">
        <span class="font-bold text-md">{{item().title}}</span>
        <span class="text-sm">{{ '$' + item().price}}</span>
      </div>
      <div class="flex-1"></div>
      <app-button 
      (buttonClicked)="cartService.removeFromCart(index())" lable="Remove"></app-button>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<VinylRecord>();
  cartService = inject(CartService);
  index = input.required<number>();
}
