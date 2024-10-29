export class Person {
    constructor( public name: string,  private address: string = 'No address') { }
}   


export class Hero{
    
    constructor(
        public AlterEgo : string, 
        public realName: string,
        public superPower: string,
        public person: Person,
    ) {}

}
//Concepto de Composicion TS
const tony = new Person('Tony Stark', 'New York');
const IronMan = new Hero('IromMan', 'Tony Stark', 'Super Intelligence', tony);
console.log(IronMan);