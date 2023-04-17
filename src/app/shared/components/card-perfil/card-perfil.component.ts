import { LoginService } from '../../../domain/login/services/login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.scss'],
})
export class CardPerfilComponent implements OnInit {
  dataAccount: Account;

  @Output() cardPerfilClick = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.getDataAccount();
  }

  getDataAccount() {
    this.dataAccount = this.loginService.getDataFromAccount();
  }

  verifyIfDataAccountIsEmpty() {
    if (Object.keys(this.dataAccount).length) {
      return true;
    }
    return false;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    this.cardPerfilClick.emit();
  }
}
