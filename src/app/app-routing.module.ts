import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./domain/task-list/task-list.module').then(
        (m) => m.TaskListDomainModule
      ),
  },
  {
    path: 'viacep',
    loadChildren: () =>
      import('./domain/via-cep/via-cep.module').then((m) => m.ViaCepModule),
  },
  {
    path: 'restcountries',
    loadChildren: () =>
      import('./domain/rest-countries/rest-countries.module').then(
        (m) => m.RestCountriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
