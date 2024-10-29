import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-counter',
  template: `<hr>
<p>
 counter:   {{ counter }}
</p>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter:number = 10;

  increaseBy( value: number): void{
    this.counter = this.counter +1
  }
  decreaseBy(value: number): void {
    this.counter = this.counter - 1
  }

  reset():void{
    this.counter = this.counter = 10
  }

}
