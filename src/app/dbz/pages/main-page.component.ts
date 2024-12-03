import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit
{
  public characters:Character[] =
  [
    {
      name:'krilin',
      power:1000,
    },
    {
      name:'Goku',
      power:9500
    },
    {
      name:'Pikoro',
      power:5200
    },
    {
      name:'Vegeta',
      power:7500
    }
  ];

  onNewCharacter(character:Character):void{
    this.characters.push(character);
    console.log("Main Page character ",character);
  }
  onDeleteChracter(index:number):void
  {
    debugger
    //here we're say , delete the element on the index = index , and homany elements ( only 1 in this case)
    this.characters.splice(index,1);
    console.log('from main page',{index})

  }
  constructor() { }

  ngOnInit() { }
}
