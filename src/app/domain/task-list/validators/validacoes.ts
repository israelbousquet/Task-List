import { FormControl } from '@angular/forms';

export class Validacoes {
  static validateInputLength(control: FormControl) {
    const input = control.value;
    const inputLength = input.length;
    if (inputLength > 75) {
      return { inputLengthInvalid: true };
    }
    return null;
  }
}
