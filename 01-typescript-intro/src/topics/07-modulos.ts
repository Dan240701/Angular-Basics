import { Product, TaxtCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 350.0
    }
];

//Pasarle el objeto con las opciones
const  [total, tax ] = TaxtCalculation({
    product: shoppingCart,
    tax: 0.15
});

console.log('Total a pagar: ', total);
console.log('Impuesto: ', tax);