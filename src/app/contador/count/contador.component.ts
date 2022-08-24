import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <button (click)="add(base)">+ {{ base }}</button>
        <span> {{ numero }} </span>
        <button (click)="add(-base)">- {{ base }}</button>

        <h3>La base es: <strong>{{ base }}</strong></h3>
    `
})
export class ContadorComponent {

    title = 'bases';
    
    numero: number = 10;

    base: number = 5;
  
    add(valor:number): void {
      this.numero += valor;
    }
}
