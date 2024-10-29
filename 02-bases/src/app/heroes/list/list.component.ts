import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Superman', 'Batman', 'Hulk', 'Ironman', 'Spiderman', 'thor'];
  public lastHero?: string;
  DeleteLastHero() {
    this.lastHero = this.heroNames.pop();
  }

}
