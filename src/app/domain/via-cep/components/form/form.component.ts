import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

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
      cep: new FormControl('', [Validators.required]),
      rua: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
    });
  }

  consultaCEP() {
    const cep = this.form.get('cep')?.value;
    this.cepService.getCep(cep).subscribe({
      next: (data) => {
        console.log(data);
        this.setValueForm(data);
      },
      error: (err) => {
        this.toastService.showToastError('Cep não encontrado');
      },
    });
  }

  setValueForm(dataCep: any) {
    this.form.patchValue({
      bairro: dataCep.bairro,
      rua: dataCep.logradouro,
      cidade: dataCep.localidade,
      estado: dataCep.uf,
    });
  }
}
