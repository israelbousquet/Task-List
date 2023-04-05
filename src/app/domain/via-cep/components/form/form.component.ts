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
      rua: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
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

  public onSubmit() {
    this.form.reset();
    this.form.reset();
    this.form.setErrors(null); // could be removed
    this.form.updateValueAndValidity();

    this.toastService.showToastSucess('Formulário resetado com sucesso');
  }
}
