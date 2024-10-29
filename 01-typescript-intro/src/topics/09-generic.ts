/*GENERICS TS*/

export function whatsMyType<T>(arg: T): T {
    return arg;
}

let iamString = whatsMyType<string>('I am a string');
let iamNumber = whatsMyType<number>(50);
let iamArray = whatsMyType<number[]>([1,2,3,4,5,5]);

console.log(iamString.split(' '));
console.log(iamNumber.toFixed(2));
console.log(iamArray.join(' - '));
