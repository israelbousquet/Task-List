import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add-input',
  templateUrl: './task-add-input.component.html',
  styleUrls: ['./task-add-input.component.scss'],
})
export class TaskAddInputComponent implements OnInit {
  form: FormGroup<{
    name: FormControl;
  }>;

  @Input() textInput: string = '';
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  emitValue() {
    this.valueChange.emit(this.form.controls.name.value);
    this.form.reset();
    this.form.controls.name.clearValidators();
    this.form.controls.name.updateValueAndValidity();
  }
}
