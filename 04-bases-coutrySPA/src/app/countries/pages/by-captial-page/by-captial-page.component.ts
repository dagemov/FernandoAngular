import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-by-captial-page',
  templateUrl: './by-captial-page.component.html',
  styleUrl: './by-captial-page.component.css'
})
export class ByCaptialPageComponent {



  searchByCapital(term:string):void{
    console.log('by capital page' + term)

  }
}
