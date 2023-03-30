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
    this.getAllCountries();
    this.filteredCountries$ = this.allCountries$;
  }

  getAllCountries() {
    this.allCountries$ = this.countrieService.getCountries();
  }

  searchCountryName(countryName: string) {
    if (countryName.length > 0) {
      this.filteredCountries$ = this.allCountries$.pipe(
        map((countries: any) => {
          console.log(countries);
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
}
