import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private API_url = 'https://restcountries.com/v3.1/all';
  public countries$$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getCountriesFromApi(): Observable<any> {
    return this.http.get(this.API_url);
  }

  getAllCountries() {
    const storageCountries = this.localStorage.get('countries');

    if (storageCountries.length) {
      return this.countries$$.next(storageCountries);
    }

    this.getCountriesFromApi().subscribe((countries: any) => {
      this.localStorage.set('countries', countries);
      this.countries$$.next(countries);
    });
  }

  getCountriesFromLocalStorage() {
    return this.localStorage.get('countries');
  }

  getCountriesByName(name: string) {
    const countriesFromStorage = this.getCountriesFromLocalStorage();

    const countriesByName = countriesFromStorage.filter((country: any) => {
      return country.name.common === name;
    });

    return of(countriesByName);
  }

  filtersCountryByNameOrRegion(filters: { search: string; region: string }) {
    const { search, region } = filters;
    let countries = this.getCountriesFromLocalStorage();
    console.log(countries);

    if (region) {
      const filterByRegion = countries.filter((country: any) => {
        return country.region === region;
      });
      countries = filterByRegion;
    }

    if (search) {
      const filterBySearch = countries
        .filter((country: any) => {
          const name = country.name.common.toLowerCase();
          return name.startsWith(search.toLowerCase());
        })
        .sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
      countries = filterBySearch;
    }

    this.countries$$.next(countries);
  }
}
