export interface Product { 
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350.0
}

export interface TaxCalculatorOptions {
    tax : number;
    product: Product[];

}

export function TaxtCalculation ( options: TaxCalculatorOptions ): [number, number] {

  const { tax, product } = options;

   let total = 0;
    product.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = TaxtCalculation({
    product: shoppingCart,
    tax: tax,

})

console.log('Total a pagar: ', total);
console.log('Impuesto: ', taxTotal);


