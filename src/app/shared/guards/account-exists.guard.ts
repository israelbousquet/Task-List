import { ToastService } from 'src/app/shared/services/toast.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountExistsGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private toast: ToastService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const accountLocal = this.localStorageService.get('account');

    if (accountLocal && Object.keys(accountLocal).length) {
      return true;
    } else {
      this.toast.showToastError('Crie uma conta para acessar o ViaCep');
      this.router.navigate(['/account/login']);
      return false;
    }
  }
}
