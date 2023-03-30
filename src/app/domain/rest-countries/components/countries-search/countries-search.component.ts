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
  @Input() country: any;

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

  countryChange() {
    const name = this.form.controls.name.value;
    this.countryName.emit(name);
  }

  regionChange() {
    const regionName = this.form.controls.region.value;
    this.regionName.emit(regionName);
  }
}
