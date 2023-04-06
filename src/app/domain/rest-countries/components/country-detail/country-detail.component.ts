import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, startWith, switchMap } from 'rxjs';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Location } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  keyLanguage: string;
  borders: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.initCountryParams();
    this.getKey();
    this.getBorders();
  }

  initCountryParams() {
    this.route.params
      .pipe(
        untilDestroyed(this),
        map((params: any) => params['name']),
        switchMap((name) => this.countriesService.getCountriesByName(name))
      )
      .subscribe({
        next: (country: Country) => {
          this.country = country;
          this.getKey();
        },
      });
  }

  getLanguageArray(languages: { [key: string]: string }) {
    return Object.values(languages);
  }

  getCurrencyNames(currencies: { [key: string]: any }): string[] {
    return Object.values(currencies).map((currency) => currency.name);
  }

  getKey() {
    if (this.country.languages) {
      return (this.keyLanguage = Object.keys(this.country.languages)[0]);
    }
    return null;
  }

  getBorders() {
    if (!this.country.borders) return;

    const borders = this.country.borders;
    this.borders = this.countriesService.getCountriesNameByBorders(borders);
  }
}
