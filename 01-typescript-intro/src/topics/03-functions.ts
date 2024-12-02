


// function addNumbers(x :number, y : number)
// {
//     return x+y;
// }
// //Here we defiend the signature pf the function (string)
// const addNumberArrow = (a:number , b:number ) : string =>
// {
//     return `${(a+b)}`;
// }

// function multiply(firstNumber:number,secondNumber?:number,base:number=2){
//     return firstNumber*base;
// }

// const result1 = addNumberArrow(4,2)
// const result = addNumbers(1,2)
// const multiplyResult:number = multiply(5);

// console.table({result,result1,multiplyResult})

interface Character {
    name : string;
    hpPoint :number;
    showHp:() => void;
}

const healCharacter = (character:Character,amount : number)=>
{
    character.hpPoint += amount;
}

const strider:Character={
    name:'Strider',
    hpPoint:50,
    showHp(){
        console.log(`heat Pounts  : ${this.hpPoint}`)
    }
}

healCharacter(strider,10);
healCharacter(strider,30);
strider.showHp();

export{}