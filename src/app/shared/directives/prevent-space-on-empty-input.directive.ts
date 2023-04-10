import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventSpaceOnEmptyInput]',
})
export class PreventSpaceOnEmptyInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (!this.el.nativeElement.value && event.code === 'Space') {
      event.preventDefault();
    }
  }
}
