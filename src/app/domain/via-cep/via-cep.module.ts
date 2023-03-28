import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViaCepRoutingModule } from './via-cep-routing.module';
import { FormComponent } from './components/form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ViaCepRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ViaCepModule {}
