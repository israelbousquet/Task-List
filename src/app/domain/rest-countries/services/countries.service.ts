import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  allCountries$: any;

  constructor(private http: HttpClient) {}

  public countries$$ = new BehaviorSubject([{}]);

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountriesTeste() {
    return this.http.get<[{}]>('https://restcountries.com/v3.1/all').subscribe({
      next: (res) => this.countries$$.next(res),
    });
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
