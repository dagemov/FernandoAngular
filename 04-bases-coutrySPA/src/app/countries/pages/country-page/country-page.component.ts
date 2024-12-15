import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class  CountryPageComponent implements OnInit{

  public country?:Country

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,

    private countryService:CountriesService,

  )
  {

  }

  ngOnInit(): void
  {
    //this get the :  path:'by/:id', of our countries-routing , with this we get the id of the country

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countryService.searchCountryByAlphaCode(id))// los maps no dan el dato de retorno especifico
    )
    .subscribe(response=>
    {
      if(!response)
      {
        return this.router.navigateByUrl('');
      }

       return  this.country =  response;

    });

  }

  // searchCountry(code:string):void{

      /* this.countryService.searchCountryByAlphaCode(id)
      //here we have to re subcribe at the service , cuz we use the actuveRooute to get the param and now we need get the country
      //and to get the country is other method service (get api)and is observable
        .subscribe(countries=>{
        console.log({countries})*/
  //   this.countryService.searchCountryByAlphaCode(code)
  //   //here we have to re subcribe at the service , cuz we use the actuveRooute to get the param and now we need get the country
  //   //and to get the country is other method service (get api)and is observable
  //     .subscribe(countries=>{
  //       console.log(countries)
  //     });
  // }
}
