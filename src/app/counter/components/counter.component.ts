import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  templateUrl:'./counter.component.html'
})
export class CounterComponent{
  public counter:number = 10;

  increaseBy(value:number):void{
    if(value == 0)
    {
      this.counter-=1
      console.log(value)
    }
    else if(value >=1)
    {
      console.log(value)
      this.counter+=1
    }

  }
  Reset():void{
    this.counter=10
  }
}
