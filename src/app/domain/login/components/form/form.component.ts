import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/customValidators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup<{
    userName: FormControl;
    email: FormControl;
    password: FormControl;
  }>;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        CustomValidators.userNameValidator,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
