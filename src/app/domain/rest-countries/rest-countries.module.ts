import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { CountrieCardComponent } from './components/countrie-card/countrie-card.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountriesSearchComponent } from './components/countries-search/countries-search.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { DetailsComponent } from './pages/details/details.component';
import { RestCountriesRoutingModule } from './rest-countries-routing.module';
import { PopulationPipe } from './pipes/population.pipe';

@NgModule({
  declarations: [
    CountrieCardComponent,
    CountriesListComponent,
    CountriesSearchComponent,
    CountriesComponent,
    CountryDetailComponent,
    DetailsComponent,
    PopulationPipe,
  ],
  imports: [
    CommonModule,
    RestCountriesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class RestCountriesModule {}
