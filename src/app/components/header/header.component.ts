import { Component, inject, input, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
  <div class="bg-slate-200 px-4 py-3 flex justify-between shadow-md">
    <button class="text-2xl" routerLink="/">Albumi</button>
    <app-primary-button
      [lable]="'Cart (' + cartService.cart().length + ')'"
      routerLink="/cart"
    />
  </div>`,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);
}
