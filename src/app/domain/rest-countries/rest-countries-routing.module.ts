import { DetailsComponent } from './pages/details/details.component';
import { CountriesComponent } from './pages/countries/countries.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  },
  {
    path: 'details/:name',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestCountriesRoutingModule {}
