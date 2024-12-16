import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';




const routes : Routes =
[
  {
    path:'',
    component:BasicsPageComponent
  },
  {
    path:'numbers',
    component:NumbersPageComponent
  },
  {
    path:'uncommom',
    component:UncommonPageComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsRoutingModule { }
