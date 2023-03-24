import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Validacoes } from '../../../validators/validacoes';

@Component({
  selector: 'app-task-add-input',
  templateUrl: './task-add-input.component.html',
  styleUrls: ['./task-add-input.component.scss'],
})
export class TaskAddInputComponent implements OnInit {
  form: FormGroup<{
    name: FormControl;
  }>;

  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validacoes.validateInputLength,
      ]),
    });
  }

  emitValue() {
    this.valueChange.emit(this.form.controls.name.value);
    this.form.reset();
  }
}
