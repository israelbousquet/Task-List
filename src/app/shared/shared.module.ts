import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { PreventSpaceOnEmptyInputDirective } from './directives/prevent-space-on-empty-input.directive';
import { UpdateViewportHeightDirective } from './directives/update-viewport-height.directive';

@NgModule({
  declarations: [ErrorMsgComponent, PreventSpaceOnEmptyInputDirective, UpdateViewportHeightDirective],
  imports: [CommonModule],
  exports: [ErrorMsgComponent, PreventSpaceOnEmptyInputDirective],
})
export class SharedModule {}
