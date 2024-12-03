import { Component, inject, input } from '@angular/core';
import { VinylRecord } from '../../models/product.model';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border hover:shadow-lg hover:shadow-gray-900/20 rounded-xl">
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="flex justify-center items-center w-[200px] h-[100px] rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img [src]="VinylRecord().coverImage"
        [alt]="VinylRecord().title"
        class="w-[200px] h-[100px] object-contain">
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <span class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{{ VinylRecord().title }}</span>
        <span class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{{ VinylRecord().artist }}</span>
        <span class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{{ VinylRecord().releaseYear }}</span>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{{ VinylRecord().genre }}</p>
        <span class="text-sm">{{ "$" + VinylRecord().price }}</span>
        <app-primary-button lable="Add to cart" class="absolute bottom-2 right-2" (buttonClicked)="cartService.addToCart(VinylRecord())" />

        <span class="absolute top-2 right-3 text-sm font-bold">
          @if (VinylRecord().stock > 0){
            <span class="text-green-500"> {{ VinylRecord().stock }} In stock</span>
          }@else {
            <span class="text-red-500">Out of stock</span>
          }
        </span>
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  VinylRecord = input.required<VinylRecord>();
  cartService = inject(CartService);
}
