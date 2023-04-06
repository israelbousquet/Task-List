import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';

import { CepService } from './../../services/cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup<{
    cep: FormControl;
    rua: FormControl;
    bairro: FormControl;
    cidade: FormControl;
    estado: FormControl;
  }>;

  constructor(
    private cepService: CepService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      cep: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      rua: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
    });
  }
  public cepIsLoading: boolean = false;

  consultaCEP() {
    const cep = this.form.get('cep')?.value;
    if (cep.length < 8) return;
    this.cepIsLoading = true;

    this.cepService.getCep(cep).subscribe({
      next: (data) => {
        this.cepIsLoading = false;
        this.setValueForm(data);
      },
      error: (err) => {
        this.cepIsLoading = false;
        this.setValueForm('');
        this.toastService.showToastError('Cep não encontrado');
      },
    });
  }

  setValueForm(dataCep: any) {
    this.form.patchValue({
      bairro: dataCep.bairro ?? '',
      rua: dataCep.rua ?? '',
      cidade: dataCep.cidade ?? '',
      estado: dataCep.estado ?? '',
    });
  }

  public onSubmit() {}

  formReset() {
    const cep = this.form.value.cep;

    const initialValues = {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
    };

    if (cep && cep.length) {
      this.form.setValue(initialValues);
      return this.toastService.showToastSucess(
        'Formulário resetado com sucesso'
      );
    }

    this.form.setErrors(null);
    this.form.updateValueAndValidity();
    return this.toastService.showToastError('O Formulário está vazio');
  }
}
