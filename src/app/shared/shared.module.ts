import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { PreventSpaceOnEmptyInputDirective } from './directives/prevent-space-on-empty-input.directive';
import { UpdateViewportHeightDirective } from './directives/update-viewport-height.directive';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    UpdateViewportHeightDirective,
    ProfileComponent,
    DarkModeComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    DarkModeComponent,
    ProfileComponent,
  ],
})
export class SharedModule {}
