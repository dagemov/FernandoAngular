import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';




const routes: Routes =
[
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactComponent

  },
  {
    path:'countries',
    //lazyload               path(make sure the main module import the children module)
    loadChildren:()=>import('./countries/countries.module').then(m=>m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:'countries' //ruta por defecto del componente route hijo
  }
];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes)//cuando es el arhcivo principal de rotas
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
