interface character {
    name: string;
    hpPoints: number;
    skills:  string[];
    homtown?: string;

}

const goku : character ={
    name: 'Goku',
    hpPoints: 100000,
    skills: ['Kamehhameha', 'Genkidama']
}

goku.homtown = 'Saiyan Planet';

console.table(goku);
console.log({goku});    


export {};