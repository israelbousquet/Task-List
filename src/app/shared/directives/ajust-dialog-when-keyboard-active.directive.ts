import { OverlayContainer } from '@angular/cdk/overlay';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Directive({
  selector: '[ajustDialogWhenKeyboardActive]',
})
export class AjustDialogWhenKeyboardActiveDirective {
  constructor(
    private overlayContainer: OverlayContainer,
    private dialogRef: MatDialogRef<any>
  ) {}

  @HostListener('window:resize', ['$event'])
  @HostListener('window:keyboardWillShow', ['$event'])
  onResize(event: any) {
    // Verifica se o teclado virtual está ativo
    const isVirtualKeyboardActive = event && event.keyboardHeight !== undefined;

    // Obtém a posição atual do dialog
    const currentPosition = this.dialogRef.componentInstance.location._top;

    // Obtém a altura atual da janela
    const windowHeight = window.innerHeight;

    // Calcula a nova posição do dialog
    const newPosition = isVirtualKeyboardActive
      ? Math.max(0, currentPosition + windowHeight - event.keyboardHeight)
      : Math.max(0, currentPosition - event.deltaY);

    // Atualiza a posição do dialog
    this.dialogRef.updatePosition({
      top: `${newPosition}px`,
    });
    this.overlayContainer.getContainerElement().style.top = `${newPosition}px`;
  }
}
