import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent {
  @Input() control: FormControl;
  @Input() label: string;

  get errorMessage() {
    for (const erro in this.control.errors) {
      return this.generateMessageError(
        this.label,
        erro,
        this.control.errors[erro]
      );
    }
  }

  generateMessageError(label: string, erroKey: string, validatorValue?: any) {
    const message: { [key: string]: any } = {
      required: `${label} é um campo obrigatório`,
      maxlength: `${label} deve ter no máximo ${validatorValue.requiredLength} caracteres`,
      minlength: `${label} deve ter no mínimo ${validatorValue.requiredLength} caracteres`,
    };

    return message[erroKey];
  }
}
