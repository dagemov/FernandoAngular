import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule//to propierties of navigation angular like  ngIf , ngFor,etc.. you have to import this one
  ]
  ,
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule{}
