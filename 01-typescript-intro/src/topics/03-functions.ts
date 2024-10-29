function addNumbers (a: number, b: number): number{
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string =>{
    return `${a + b}`;
}

function addBase(a: number, b?: number, base: number = 2): number{
    return a * base;
}

/*funciones con objetos como argumentos*/
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const heal = (character: Character, amount: number) => {
    character.hp += amount;
};

const personaje: Character = {
    name: 'Strider',
    hp: 60,
    showHp(){
        console.log(`Puntos de vida: ${ this.hp}`);
    }
}

heal(personaje, 30);
console.table(personaje);
personaje.showHp();


const result = addNumbers(5,10);
const result2 = addNumbersArrow(5,10);
const result3 = addBase(10);


console.log(result, result2, result3);
export {}; 