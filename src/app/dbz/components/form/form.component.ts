import { Component, EventEmitter, Output } from '@angular/core';
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
    name:'',
    power:0
  };

  emitCharacter():void
  {

    console.log(this.character)

    if(this.character.name.length == 0 || this.character.power<0) return;

    this.onNewCharacter.emit(this.character)

    this.character.name = "",
    this.character.power = 0
  }
  constructor(){

  }
}
