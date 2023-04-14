import { ToastService } from 'src/app/shared/services/toast.service';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private localStorageService: LocalStorageService,
    private toastService: ToastService
  ) {}

  saveInLocalStorage(formValue: any) {
    const formValueObj = {
      username: formValue.userName,
      email: formValue.email,
      password: formValue.password,
    };
    this.localStorageService.set('account', formValueObj);
    this.toastService.showToastSucess('Conta criada com sucesso');
  }
}
