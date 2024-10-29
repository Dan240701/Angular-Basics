/*Typescript posee un tipado estricto */

const name = 'Dams';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({
    name,
    hpPoints,
    isAlive
}
);;


export {}; // Para evitar errores de re-declaración de variables