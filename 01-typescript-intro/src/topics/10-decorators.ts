function classDecorator(constructor: any){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}


@classDecorator
export class superClass{
    public myProperty: string = 'Hello';

    print(){
        console.log(this.myProperty);
    }

}

console.log( superClass );

const myClass = new superClass();
console.log(myClass);