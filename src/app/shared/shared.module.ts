import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { PreventSpaceOnEmptyInputDirective } from './directives/prevent-space-on-empty-input.directive';
import { AjustDialogWhenKeyboardActiveDirective } from './directives/ajust-dialog-when-keyboard-active.directive';

@NgModule({
  declarations: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    AjustDialogWhenKeyboardActiveDirective,
  ],
  imports: [CommonModule],
  exports: [
    ErrorMsgComponent,
    PreventSpaceOnEmptyInputDirective,
    AjustDialogWhenKeyboardActiveDirective,
  ],
})
export class SharedModule {}
