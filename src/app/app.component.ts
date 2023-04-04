import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked: boolean = false;
  nameMode: string = 'nightlight_round';
  title = 'task-list';
  isMenuOpen = false;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.getModeFromLocalStorage();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changed(event: MatSlideToggleChange) {
    this.nameMode = event.checked ? 'light_mode' : 'nightlight_round';
    if (event.checked) {
      document.body.classList.add('ligthMode');
    } else {
      document.body.classList.remove('ligthMode');
    }
    this.localStorage.set('colorMode', this.nameMode);
  }

  getModeFromLocalStorage() {
    const modeByLocal = this.localStorage.get('colorMode');
    if (modeByLocal === 'light_mode') {
      this.isChecked = true;
      document.body.classList.add('ligthMode');
    } else {
      this.isChecked = false;
      document.body.classList.remove('ligthMode');
    }
    this.nameMode = modeByLocal;
  }
}
