import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private countryService:CountriesService){}

  searchByCountry(query:string):void
  {

    this.countryService.searchCountry(query)
    .subscribe
    (
      countries=>{this.countries=countries}
    );

  }
}
