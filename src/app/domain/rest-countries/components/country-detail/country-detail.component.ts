import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    const countryName = this.route.snapshot.paramMap.get('name')!;
    const countryDataFromService =
      this.countriesService.getCountriesByName(countryName);
    this.country = countryDataFromService;
    console.log(countryName);
  }
}
