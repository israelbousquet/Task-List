import { Account } from './interfaces/account';
import { Component, HostListener } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalStorageService } from './shared/services/local-storage.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationQueryMetadata,
} from '@angular/animations';
import { LoginService } from './domain/login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
      state('collapsed', style({ width: '45px' })),
      state('expanded', style({ width: '150px' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
      transition('expanded => void', animate('300ms ease-in-out')),
    ]),
    trigger('menuAnimation', [
      state(
        'open',
        style({
          transform: 'rotate(90deg)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      transition('open <=> closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  showFiller = false;
  innerWidth: number;
  isLargeScreen: boolean;
  iconMenu: string = 'menu';

  dataAccount: Account;

  sidenavState() {
    return this.showFiller ? 'expanded' : 'collapsed';
  }

  constructor(
    private localStorage: LocalStorageService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.isLargeScreen = this.innerWidth > 900;
  }

  menuClicked() {
    if (this.showFiller) {
      return (this.iconMenu = 'close');
    }
    return (this.iconMenu = 'menu');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.isLargeScreen = this.innerWidth > 900;
  }

  links: any[] = [
    {
      name: 'Home',
      icon: 'home',
      routerLink: '/home',
    },
    {
      name: 'ViaCep',
      icon: 'pin_drop',
      routerLink: '/viacep',
    },
    {
      name: 'Countries',
      icon: 'public',
      routerLink: '/restcountries',
    },
  ];
}
