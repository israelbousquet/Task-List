import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  allCountries$: any;
  filteredCountries$: any;

  constructor(private countrieService: CountriesService) {}

  ngOnInit() {
    this.countrieService.getCountriesTeste();
    this.countrieService.countries$$.subscribe((countrie) =>
      console.log(countrie)
    );
    this.allCountries$ = this.countrieService.getCountries();
    this.getAllCountries();
    this.filteredCountries$ = this.allCountries$;
  }

  getAllCountries() {
    this.allCountries$ = this.countrieService.getCountries();
  }

  filtersCountryByNameOrRegion(filters: { search: string; region: string }) {
    const { search, region } = filters;
    let countries = this.countrieService.getCountries();

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
    this.filteredCountries$ = countries;
  }
}
