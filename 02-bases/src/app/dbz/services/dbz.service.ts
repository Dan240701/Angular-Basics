import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 500
  },
  {
    id: uuid(),
    name: 'Piccolo',
    power: 3000
  }
]
// ... Spread in object literals
onNewCharacter(character: Character ):void{
 const newCharacter: Character = {
  id: uuid(), ...character};

  this.characters.push(newCharacter);
}

// OnDeleteCharacter(index: number):void{
//   this.characters.splice(index, 1);
//   console.log("Main Page: Indice obtenido:" + index);
// }

DeleteCharacterById(id: string){
  this.characters = this.characters.filter( character => character.id !== id);
}

}
