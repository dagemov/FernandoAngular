import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  private apiUrl:string = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }


  searchCountryByAlphaCode(query:string):Observable<Country[]>
  {
    const url =`${this.apiUrl}/alpha/${query}`;
    return this.searchQuery(url);
  }

  searchByCapital(query:string):Observable<Country[]>
  {
      const url = `${this.apiUrl}/capital/${query}`;
      return this.searchQuery(url);

  }

  searchCountry(query:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${query}`
   return this.searchQuery(url);
  }

  searchByRegion(query:string):Observable<Country[]>
  {
    const url = `${this.apiUrl}/region/${query}`
    return this.searchQuery(url);

  }

  searchQuery(queryUrl:string):Observable<Country[]>
  {
    const result =  this.http.get<Country[]>(queryUrl)
    //pipe para controlar peticiones erroneas
    .pipe(
      catchError(() =>of([]))
    );
    return result
  }
}

