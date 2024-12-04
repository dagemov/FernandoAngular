import { Injectable } from '@angular/core';

import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/Character.interface';


@Injectable({providedIn: 'root'})
export class DbzService
{
  public characters:Character[] =
  [
    {
      id:uuid(),
      name:'krilin',
      power:1000,
    },
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Pikoro',
      power:5200
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  onNewCharacter(character:Character):void
  {

    //  const newCharacter:Character={
    //   id:uuid(),
    //   name:character.name,
    //   power:character.power
    //  }
      //only in this case we push first the id , but for the general is first the object and then the id (we haf the id?)
    const newCharacter:Character={...character,id:uuid()}; // we have required id :)

    this.characters.push(newCharacter);
    console.log("Main Page character ",newCharacter);
  }

  onDeleteChracter(index:number):void
  {
    //here we're say , delete the element on the index = index , and homany elements ( only 1 in this case)
    this.characters.splice(index,1);
    console.log('from main page',{index})

  }

  deleteCharacterById(id:string):void
  {
    this.characters.filter(charater=>charater.id !== id)
    console.log('from main page . deleted : ',id)
    this.characters =  this.characters.filter(charater=>charater.id !== id)

  }
  constructor() { }

}
