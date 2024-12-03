import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{
  @Output()
  public onDelete:EventEmitter<number>=new EventEmitter()

  @Input()
  //input getthe data form the fahter and if we don't got a data , the defect valud is de normal characterList
  public characterList: Character[] =
  [
    {
      name:"Trunk",
      power:10
    }
  ];


  emitOnDelete(id:number):void
  {

    const result = this.characterList[id];
    console.log({result});

    this.onDelete.emit(id);
    id=0;

  }

  onDeleteCharacter(index:number):void{
    //TODO:emitir Id if character
    console.log({index});
    this.emitOnDelete(index);
  }
}
