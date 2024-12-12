import { Component} from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-captial-page',
  templateUrl: './by-captial-page.component.html',
  styleUrl: './by-captial-page.component.css'
})
export class ByCaptialPageComponent {

  public countries:Country[] = [];
  constructor(private countriesService:CountriesService)
  {

  }
  searchByCapital(term:string):void
  {
    this.countriesService.searchByCapital(term)
    .subscribe(
      countries =>{this.countries = countries;}
    );
  }
}
