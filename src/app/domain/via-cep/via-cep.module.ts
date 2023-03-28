import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormComponent } from './components/form/form.component';
import { ViaCepRoutingModule } from './via-cep-routing.module';
import { CepComponent } from './pages/cep/cep.component';

@NgModule({
  declarations: [FormComponent, CepComponent],
  imports: [
    CommonModule,
    ViaCepRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ViaCepModule {}
