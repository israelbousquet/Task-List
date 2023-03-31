import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countrie-card',
  templateUrl: './countrie-card.component.html',
  styleUrls: ['./countrie-card.component.scss'],
})
export class CountrieCardComponent {
  @Input() country: Country;
}
