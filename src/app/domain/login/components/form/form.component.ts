import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CustomValidators } from 'src/app/validators/customValidators';
import { LoginService } from '../../services/login.service';

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

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.passwordValidator,
      ]),
    });
  }

  onSubmit() {
    this.loginService.saveInLocalStorage(this.form.value);
    this.formGroupDirective.resetForm();
  }
}
