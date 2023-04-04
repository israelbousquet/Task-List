import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked: boolean = false;
  nameMode: string = 'nightlight_round';
  title = 'task-list';

  ngOnInit() {}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changed(event: MatSlideToggleChange) {
    this.nameMode = event.checked ? 'light_mode' : 'nightlight_round';
    document.body.classList.toggle('ligthMode');
  }
}
