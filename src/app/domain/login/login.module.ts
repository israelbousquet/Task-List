import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

import { FormComponent } from './components/form/form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [FormComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class LoginModule {}
