import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { CountrieCardComponent } from './components/countrie-card/countrie-card.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountriesSearchComponent } from './components/countries-search/countries-search.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { RestCountriesRoutingModule } from './rest-countries-routing.module';

@NgModule({
  declarations: [
    CountrieCardComponent,
    CountriesListComponent,
    CountriesSearchComponent,
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    RestCountriesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
  ],
})
export class RestCountriesModule {}
