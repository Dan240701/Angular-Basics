import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] =[{
    name: 'trunks',
    power: 5
  }]


  @Output('valueDeleted')
  OnDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacterById(index?: string):void{

    if(!index) return; // paso 1. Check if the index is valid
    this.OnDelete.emit(index) // paso 2. Emit the event with the index value
    console.log("Indice obtenido:" + index);
  }


}
