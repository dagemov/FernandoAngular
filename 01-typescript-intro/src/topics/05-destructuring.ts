interface AudioPlayer
{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details
{
    year:string;
    author:string;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        year: "1998",
        author: "Ed Sheeran"
    }
}


//destruction

const {} = audioPlayer;

//get one or many elements from the object

console.log('Song :',audioPlayer.song);
console.log('Author : ',audioPlayer.details.author);

//the idea iswe can get the elemnts we need like : 

//desetructuration of Song
const {song:anotherSong,songDuration:duration,details:details} = audioPlayer;
//desetructuration of details
const {author:author,year:year}=details;

//Is like do includes and then includes more simples
//login when this got a relationship we have to do seacrh more robustes

console.log('Song :',anotherSong,'Duration : ',duration,'author',author,'year',year);



//ARRAYS DESTRUCTURATION

const dbz: string[] = ['Gokue','veggeta','Trunk'];
//destructuraion
const [p1,p2,p3 = 'Not Found'] : string[] = dbz;

console.log('pj ',dbz[5] || "character don't found")

console.error('destructuraion array : ',p3);
export{};