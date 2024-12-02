export interface Product{
    description:string;
    price:number;
}

const Phone:Product={
    description: "Iphone 13 xs pro max",
    price: 3500
}

const Table:Product={
    description : "Xiaomi",
    price : 500
}

export interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

const KeyWoard : Product = {
    description: "Keywoard",
    price: 350
}

// function taxCalculation(options:TaxCalculationOptions): number[]{
// function taxCalculation({tax,products}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    const {tax,products} =options;
    let total = 0;

    // options.products.forEach(product => {
    //     total += product.price;
    // });

    products.forEach(({price}) => {
        total += price;
    });

    return [total,total*tax]
}



const shoppingCart = [Phone,Table,KeyWoard];
const tax = 0.15;

const [total,taxResult] = taxCalculation
({
    products:shoppingCart,
    tax:tax
});

console.log('total',total);
console.log('total',taxResult);



interface Person {
    name: string;
    age: number;
}

const person: Person = { name: "John", age: 30 };
// Exercise: Extract name and age
// Your turn: const {???} = person;

const {name:name,age:age} = person
console.log(name,age)

const numbers = [1, 2, 3, 4, 5];
// Exercise: Extract first three numbers
// Your turn: const [???] = numbers;

const[n1,n2,n3] = numbers;
console.log(n1,n2,n3)



interface Car {
    brand: string;
    specs: {
        power: number;
        year: number;
    }
}

const car: Car = {
    brand: "Toyota",
    specs: {
        power: 150,
        year: 2020
    }
};
// Exercise: Extract brand and power
// Your turn: const {???} = car;
const {brand:brand,specs:{power:power}} =car
console.log(brand,power)


interface Config {
    id: number;
    settings: {
        theme: string;
        notifications: boolean;
    }
}

// Exercise: Write a function that accepts Config and destructures in the parameter
// Your turn: function setupConfig(???) {...}
function setupConfig({ id, settings: { theme, notifications } }: Config) {
   
    console.log(`ID: ${id}`);
    console.log(`Theme: ${theme}`);
    console.log(`Notifications: ${notifications}`);
}

function setupConfigDestructured(options: Config) {
    const {id,settings:{theme,notifications}} = options
   
    console.log(`ID: ${id}`);
    console.log(`Theme: ${theme}`);
    console.log(`Notifications: ${notifications}`);
}
// used
const myConfig: Config = {
    id: 1,
    settings: {
        theme: 'dark',
        notifications: true
    }
};

setupConfigDestructured(myConfig);
