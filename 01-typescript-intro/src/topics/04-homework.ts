interface Address{
    street:string;
    country:string;
    city:string;
}
interface SuperHero{
    name:string;
    age:number;
    address:Address;
    showAddress:()=>string;
}

const superHeroe:SuperHero =  
{
    name:'sebastian',
    age : 23,
    address:{
        street:'89 jewwet av',
        country:'User',
        city:'Bridgeport'
    },
    showAddress() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Address: ${this.address.street}, ${this.address.city}, ${this.address.country}
        `;
    }
}

const result = superHeroe.showAddress()
console.table(result)

export{};