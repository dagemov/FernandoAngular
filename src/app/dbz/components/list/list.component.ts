import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{
  @Output()
  public onDelete:EventEmitter<number>=new EventEmitter()
  @Output()
  public onDeleteById:EventEmitter<string>=new EventEmitter()

  @Input()
  //input getthe data form the fahter and if we don't got a data , the defect valud is de normal characterList
  public characterList: Character[] =
  [
    {
      id:uuid(),
      name:"Trunk",
      power:10
    }
  ];


  emitOnDelete(index:number):void
  {

    const result = this.characterList[index];
    console.log({result});

    this.onDelete.emit(index);
    index=0;

  }

  emitDeleteId(id:string):void
  {
    const result = this.characterList.filter(c=>c.id !== id);
    console.log(result);

    this.onDeleteById.emit(id);
  }


  onDeleteCharacter(index:number):void
  {
    console.log({index});
    this.emitOnDelete(index);
  }

  onDeleteCharacterById(character:Character):void
  {
    console.log({character});
    this.emitDeleteId((character.id).toString());
  }
}
