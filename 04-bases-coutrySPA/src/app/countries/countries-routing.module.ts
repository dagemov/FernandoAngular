import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ByCaptialPageComponent } from './pages/by-captial-page/by-captial-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


//cargando todos los componenetes cuando entra al countries
const routes:Routes=
[
  {
    path:'by-capital',
    component:ByCaptialPageComponent
  },
  {
    path:'by-country',
    component:ByCountryPageComponent
  },
  {
    path:'by-region',
    component:ByRegionPageComponent
  },
  {
    //first is / then : then id
    path:'by/:id',
    component:CountryPageComponent
  },
]


@NgModule({
  declarations:
  [

  ],
  imports:
  [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class CountriesRoutingModule { }
