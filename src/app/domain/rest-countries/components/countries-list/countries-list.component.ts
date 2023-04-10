import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  Subject,
} from 'rxjs';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  allCountries$: Observable<Array<Country>>;
  searchInput$ = new Subject<{ search: string; region: string }>();

  constructor(private countrieService: CountriesService) {}

  ngOnInit() {
    this.countrieService.getAllCountries();
    this.getAllCountries();
    this.filterCountryOrRegion();
  }

  getAllCountries() {
    this.allCountries$ = this.countrieService.countries$$.pipe(
      map((countries: Country[]) =>
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
      )
    );
  }

  filterCountryOrRegion() {
    this.searchInput$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((filters) =>
        this.countrieService.filtersCountryByNameOrRegion(filters)
      );
  }
}
