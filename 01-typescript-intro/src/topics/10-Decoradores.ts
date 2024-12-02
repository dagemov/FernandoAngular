function classDecorator<T extends{new(...args:any[]):{}} > 
(
    constructor:T
)
{
     return class extends constructor{
        newProperty = 'New One';
        hello = "override"
     }
}

@classDecorator
class SuperClass
{
    public property:string='Abc123';

    print(){
        console.log('hello world')
    }
}

console.log(SuperClass);

const myClass= new SuperClass();

console.log(myClass);