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

  searchByCapital(query:string):Observable<Country[]>
  {
      const url = `${this.apiUrl}/capital/${query}`;
      //pipe para controlar peticiones erroneas
      return this.http.get<Country[]>(url)
      .pipe(
        catchError(() =>of([]))
      );

  }
}
