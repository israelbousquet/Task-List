import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  dataAccount: Account;

  constructor(
    private localService: LocalStorageService,
    private toast: ToastService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDataFromAccount();
    this.verifyIfAccountIsEmpty();
  }

  getDataFromAccount() {
    this.dataAccount = this.localService.get('account');
  }

  verifyIfAccountIsEmpty() {
    const data = this.dataAccount;

    if (data && Object.keys(data).length) {
      return;
    }

    return this.router.navigate(['/account/login']);
  }

  deleteDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja excluir a conta?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.localService.remove('account');
        this.toast.showToastSucess('Conta removida com sucesso');
        this.router.navigate(['/home']);
      }
    });
  }

  deleteAccount() {
    const accountLocal = this.localService.get('account');

    if (accountLocal && Object.keys(accountLocal).length) {
      this.deleteDialog();

      return;
    }
    return this.toast.showToastError('Não há nenhuma conta logada no momento');
  }

  // editAccount() {
  //   this.router.navigate(['/account/login']);
  // }
}
