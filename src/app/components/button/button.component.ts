import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="buttonClicked.emit()" 
    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full">
        {{ lable() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  lable = input('');

  buttonClicked = output();
}
