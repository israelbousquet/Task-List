import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  nameMode: string = 'nightlight_round';
  title = 'task-list';

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.getModeFromLocalStorage();
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
}
