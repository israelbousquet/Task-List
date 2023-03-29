import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormComponent } from './components/form/form.component';
import { CepComponent } from './pages/cep/cep.component';
import { ViaCepRoutingModule } from './via-cep-routing.module';

@NgModule({
  declarations: [FormComponent, CepComponent],
  imports: [
    CommonModule,
    ViaCepRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
  bootstrap: [CepComponent],
})
export class ViaCepModule {}
