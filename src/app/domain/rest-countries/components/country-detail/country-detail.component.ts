import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: any;
  keyLanguage: string;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.initCountryParams();
    this.getKey();
    console.log(this.country);
  }

  initCountryParams() {
    this.route.params
      .pipe(
        map((params: any) => params['name']),
        switchMap((name) => this.countriesService.getCountriesByName(name))
      )
      .subscribe({
        next: (country) => (this.country = country[0]),
      });
  }

  getLanguageArray(languages: { [key: string]: string }) {
    return Object.values(languages);
  }

  getKey() {
    console.log(Object.keys(this.country.languages)[0]);
    this.keyLanguage = Object.keys(this.country.languages)[0];

    console.log(Object.values(this.country.name));
  }
}
