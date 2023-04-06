import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  allCountries$: Observable<Array<Country>>;

  constructor(private countrieService: CountriesService) {}

  ngOnInit() {
    this.countrieService.getAllCountries();
    this.getAllCountries();
  }

  getAllCountries() {
    this.allCountries$ = this.countrieService.countries$$.pipe(
      startWith([]),
      map((countries: Country[]) =>
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
      )
    );
  }

  filterCountryOrRegion(filters: { search: string; region: string }) {
    this.countrieService.filtersCountryByNameOrRegion(filters);
  }
}
