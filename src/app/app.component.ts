import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'albumi';
}
