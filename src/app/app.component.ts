import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nameMode: string = 'nightlight_round';
  title = 'task-list';

  isExpanded = false;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.getModeFromLocalStorage();
  }

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
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
      name: 'Indicadores',
      icon: 'home',
      routerLink: '/',
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
