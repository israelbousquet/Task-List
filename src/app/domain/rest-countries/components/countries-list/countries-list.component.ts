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

  countryName: string;
  regionName: string;

  constructor(private countrieService: CountriesService) {}

  ngOnInit() {
    this.getAllCountries();
    this.filteredCountries$ = this.allCountries$;
  }

  getAllCountries() {
    this.allCountries$ = this.countrieService.getCountries();
  }

  getAllCountriesForRegion(region: string) {
    if (this.countryName) {
      console.log(this.countryName);
      return (this.allCountries$ = this.countrieService
        .getCountriesByRegion(region)
        .pipe(
          map((country: any) => {
            return country.filter((country: any) => {
              const name = country.name.common.toLowerCase();
              return name.startsWith(this.countryName.toLowerCase());
            });
          })
        ));
    }
    console.log(this.countryName);
    return (this.allCountries$ =
      this.countrieService.getCountriesByRegion(region));
  }

  searchCountryName(countryName: string) {
    this.countryName = countryName;
    if (countryName.length > 0) {
      this.filteredCountries$ = this.allCountries$.pipe(
        map((countries: any) => {
          return countries
            .filter((c: any) => {
              const name = c.name.common.toLowerCase();
              return name.startsWith(countryName.toLowerCase());
            })
            .sort((a: any, b: any) =>
              a.name.common.localeCompare(b.name.common)
            );
        })
      );
    } else {
      this.filteredCountries$ = this.allCountries$;
    }
  }

  searchRegionName(regionName: string) {
    this.getAllCountriesForRegion(regionName);
    this.filteredCountries$ = this.allCountries$;
  }

  filtersCountryByNameOrRegion(filters: { search: string; region: string }) {
    const { search, region } = filters;
    console.log(filters);
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
