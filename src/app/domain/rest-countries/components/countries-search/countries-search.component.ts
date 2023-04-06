import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.scss'],
})
export class CountriesSearchComponent implements OnInit {
  @Output() countryName = new EventEmitter<string>();
  @Output() regionName = new EventEmitter<string>();

  @Output() filters = new EventEmitter<{ search: string; region: string }>();
  @Input() country: any;

  search: string;
  region: string;

  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  form: FormGroup<{
    name: FormControl;
    region: FormControl;
  }>;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      region: new FormControl(''),
    });
  }

  // countryChange() {
  //   this.filterChange();
  //   const name = this.form.controls.name.value;
  //   this.search = name;
  //   this.countryName.emit(name);
  // }

  // regionChange() {
  //   this.filterChange();
  //   const regionName = this.form.controls.region.value;
  //   this.regionName.emit(regionName);
  // }

  filterChange() {
    const search = this.form.controls.name.value.trim();
    const region = this.form.controls.region.value;
    this.filters.emit({ search, region });
  }
}
