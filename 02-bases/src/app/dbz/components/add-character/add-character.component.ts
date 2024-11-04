import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output('NewCharacterEmit') // Decorator to define the output property
  onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Event emitter to send the new character to the parent component

  public character: Character = {
    name:'',
    power:0
  }

  emitCharacter() {
    if(this.character.name.length === 0)  return; // If the name is empty, it will not emit the event
    this.onNewCharacter.emit(this.character); // Emit the event with the new character

    this.character = { // Reset the form
      name: '',
      power: 0
  }}
}
