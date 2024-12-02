const skills : string[] = ['Bash','Counter','Healing'];


interface Chratacter{
    name : string;
    hp : number;
    skills : string[];
    hometown?: string;
}



const strider:Chratacter = {
    name : 'strider',
    hp : 100,
    skills : ['Bash','Counter'],
}


strider.hometown ='Rivendell';

console.table(strider);


export{};