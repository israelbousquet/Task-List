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
  ],
})
export class AppComponent {
  nameMode: string = 'nightlight_round';
  title = 'task-list';
  showFiller = false;
  innerWidth: number;
  isLargeScreen: boolean;

  sidenavState() {
    return this.showFiller ? 'expanded' : 'collapsed';
  }

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.getModeFromLocalStorage();
    this.innerWidth = window.innerWidth;
    this.isLargeScreen = this.innerWidth > 900;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.isLargeScreen = this.innerWidth > 900;
  }

  darkMode() {
    this.nameMode = 'nightlight_round';
    document.body.classList.remove('ligthMode');
    this.localStorage.set('colorMode', this.nameMode);
  }

  lightMode() {
    this.nameMode = 'light_mode';
    document.body.classList.add('ligthMode');
    this.localStorage.set('colorMode', this.nameMode);
  }

  getModeFromLocalStorage() {
    const modeByLocal = this.localStorage.get('colorMode');
    if (modeByLocal === 'light_mode') {
      document.body.classList.add('ligthMode');
    } else {
      document.body.classList.remove('ligthMode');
    }
    this.nameMode = modeByLocal;
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
