
export function whatsMyType<T>(argument:T) : T
{
    return argument;
}

const amImString =  whatsMyType<string>('Hellow world');
const IamArray=whatsMyType<number[]>([1,2,3,4,5]);

console.log(amImString)
console.log(IamArray)
