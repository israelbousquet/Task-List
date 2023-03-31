import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  allCountries$: any;

  constructor(private http: HttpClient) {
    this.getCountriesFromStorage();
  }

  public countries$$ = new BehaviorSubject([{}]);

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  setCountriesInLocalStorage() {
    this.getCountries().subscribe((res) => {
      this.setStorage('countries', res);
    });
  }

  getCountriesFromStorage() {
    const countries = this.getStorage('countries');

    if (countries.length) {
      this.countries$$.next(countries);
      return of(countries);
    }
    if (!countries.length) {
      this.setCountriesInLocalStorage();
      this.getCountries().subscribe((res) => this.countries$$.next(res));
      return this.getCountries();
    }

    return this.getCountries();
  }

  setStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  }

  filtersCountryByNameOrRegion(filters: { search: string; region: string }) {
    const { search, region } = filters;
    let countries = this.getCountriesFromStorage();

    if (region) {
      const filterByRegion = countries.pipe(
        map((country: any) => {
          return country.filter((country: any) => {
            return country.region === region;
          });
        })
      );
      countries = filterByRegion;
    }

    if (search) {
      const filterBySearch = countries.pipe(
        map((country: any) => {
          return country
            .filter((country: any) => {
              const name = country.name.common.toLowerCase();
              return name.startsWith(search.toLowerCase());
            })
            .sort((a: any, b: any) =>
              a.name.common.localeCompare(b.name.common)
            );
        })
      );
      countries = filterBySearch;
    }

    countries.subscribe((res) => this.countries$$.next(res));
  }

  // initCountries() {
  //   const countriesFromStorage = this.getStorage('countries');
  //   console.log(countriesFromStorage);
  //   this.allCountries$.subscribe((data: any) =>
  //     this.setStorage('countries', data)
  //   );
  // }
}
