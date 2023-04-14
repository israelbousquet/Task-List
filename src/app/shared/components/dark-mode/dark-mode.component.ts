import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationQueryMetadata,
} from '@angular/animations';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  isClicked = false;
  nameMode: string = 'dark_mode';
  isDarkMode: boolean = true;
  title = 'task-list';

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.getModeFromLocalStorage();
    this.localStorage.set('colorMode', this.nameMode);
  }

  toggleMode() {
    this.isClicked = !this.isClicked;

    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      return this.darkMode();
    }
    return this.lightMode();
  }

  darkMode() {
    this.nameMode = 'dark_mode';
    document.body.classList.remove('ligthMode');
    this.localStorage.set('colorMode', this.nameMode);
  }

  lightMode() {
    this.nameMode = 'light_mode';
    document.body.classList.add('ligthMode');
    this.localStorage.set('colorMode', this.nameMode);
  }

  getModeFromLocalStorage() {
    const modeInLocalStorage = this.localStorage.get('colorMode');

    if (modeInLocalStorage === 'light_mode') {
      this.isDarkMode = false;
      document.body.classList.add('ligthMode');
    } else {
      this.isDarkMode = true;
      document.body.classList.remove('ligthMode');
    }
    this.nameMode = modeInLocalStorage;
  }
}
