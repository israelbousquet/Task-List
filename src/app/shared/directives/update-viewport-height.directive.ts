import { Directive, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpdateViewportHeight]',
})
export class UpdateViewportHeightDirective implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.updateViewportHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateViewportHeight();
  }

  private updateViewportHeight() {
    const vh = window.innerHeight * 0.01;
    this.renderer.setStyle(document.documentElement, '--vh', `${vh}px`);
  }
}
