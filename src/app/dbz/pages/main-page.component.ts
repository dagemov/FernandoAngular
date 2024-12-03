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
    console.log("Main Page character ",character);
  }
  constructor() { }

  ngOnInit() { }
}
