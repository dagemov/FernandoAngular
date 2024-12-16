import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n select
  public name:string= 'fernando';
  public gender:"male"|"female" = "male"
  public invitationMap={
    male:'invited',
    female:'invited her'
  }

  changeClient():void{
    this.name = 'melisa';
    this.gender = "female";


  }

  //i18n prural
  public clients:string[] = ['Maria','Pedor','Fernando','Sebastian','Samuel','Victor','Carolina','Juan jose','Felipe','Alberto']
  public clientsMaps={
    '=0':'There are not  customers wating',
    '=1':'There is one  customer wating',
    'other':'we are got # customers waitign'
  }
  doneClient():void{
    this.clients.shift();
  }

  //keyValue

  public person = {
    name:'Fernando',
    age:36
  }

  //async pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value=>console.log('tap:',value))
  );
}
