import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  allCountries$: any;
  allCountries: any;

  constructor(private http: HttpClient) {
    this.allCountries$ = this.getCountries();
    // this.initCountries();
  }

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountriesTeste() {
    return this.http
      .get('https://restcountries.com/v3.1/all')
      .subscribe((res) => (this.allCountries = res));
  }

  setCountriesStorage() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe({
      next: (data) => this.setStorage('countries', data),
    });
  }

  getCountriesFromLocalStorage() {
    const countries = this.getStorage('countries');
    //verifica se tem algo no localstorage
    if (countries.length) {
    }

    //verifica se nao tem nada no localstorage
    if (!countries.length) {
    }
  }

  setStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  }

  // initCountries() {
  //   const countriesFromStorage = this.getStorage('countries');
  //   console.log(countriesFromStorage);
  //   this.allCountries$.subscribe((data: any) =>
  //     this.setStorage('countries', data)
  //   );
  // }
}
