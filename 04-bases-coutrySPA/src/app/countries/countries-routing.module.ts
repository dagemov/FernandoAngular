import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
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
    path:'countryPage',
    component:CountryPageComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CountriesRoutingModule { }
