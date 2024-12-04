import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/Character.interface';


@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()//para que se escuche afuera
  public onNewCharacter:EventEmitter<Character>= new EventEmitter()

  public character:Character={
    id:uuid(),
    name:'',
    power:0
  };

  emitCharacter():void
  {

    console.log(this.character)

    if(this.character.name.length == 0 || this.character.power<0) return;

    this.onNewCharacter.emit(this.character)
    //evry emit , we have to clean the object to don duplicate the same data like a mirrow in the view
    this.character = {
      id:'',
      name: '',
      power: 0
    };
  }
  constructor(){

  }
}
