import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.scss'],
})
export class CountriesSearchComponent implements OnInit {
  @Output() countryName = new EventEmitter<string>();
  @Input() country: any;
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

  countrieName() {
    const name = this.form.controls.name.value;
    this.countryName.emit(name);
  }
}
