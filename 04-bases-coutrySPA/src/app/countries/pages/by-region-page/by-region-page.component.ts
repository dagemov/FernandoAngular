import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[]=[];

  constructor(private countriesService:CountriesService){}

  searchRegion(query:string):void
  {
    this.countriesService.searchByRegion(query)
    .subscribe
    (
      countries=>{this.countries = countries}
    );
  }

}
