import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class  CountryPageComponent implements OnInit{
  //get id of country to redirect

  constructor(
    private activatedRoute:ActivatedRoute,
    private countryService:CountriesService
  )
  {

  }

  ngOnInit(): void
  {
    //this get the :  path:'by/:id', of our countries-routing , with this we get the id of the country

    this.activatedRoute.params
    .subscribe(({id})=>
    {
      this.countryService.searchCountryByAlphaCode(id)
      //here we have to re subcribe at the service , cuz we use the actuveRooute to get the param and now we need get the country
      //and to get the country is other method service (get api)and is observable
        .subscribe(countries=>{
          console.log(countries)
        });
    })
  }
}
