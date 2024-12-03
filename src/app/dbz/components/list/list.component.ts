import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{

  @Input()
  //input getthe data form the fahter and if we don't got a data , the defect valud is de normal characterList
  public characterList: Character[] =
  [
    {
      name:"Trunk",
      power:10
    }
  ];

}
