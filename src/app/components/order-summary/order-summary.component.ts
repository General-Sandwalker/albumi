import { Component, computed, inject,} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";


@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border ">
      <h2 class="text-2xl text-slate-900 font-bold"> Order Summary</h2>
      <div class="flex flex-col gap-4 mt-2">
        <span class="text-lg text-slate-900 font-bold">Total</span>
        <span class="text-lg text-slate-900 font-bold">{{ "$" + total() }}</span>
        <app-primary-button lable="Checkout" ></app-primary-button>
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    let total = 0;
    for(const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  }
)
}
