import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { PreventSpaceOnEmptyInputDirective } from './directives/prevent-space-on-empty-input.directive';
import { UpdateViewportHeightDirective } from './directives/update-viewport-height.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';

@NgModule({
  declarations: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    UpdateViewportHeightDirective,
    ProfileComponent,
    DarkModeComponent,
    CardPerfilComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    DarkModeComponent,
    ProfileComponent,
    CardPerfilComponent,
  ],
})
export class SharedModule {}
