import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked: boolean = false;
  nameMode: string = 'nightlight_round';
  title = 'task-list';

  ngOnInit() {}

  showSidenav = true;

  sidenavToggle() {
    this.showSidenav = !this.showSidenav;
  }

  changed(event: MatSlideToggleChange) {
    this.nameMode = event.checked ? 'light_mode' : 'nightlight_round';
    document.body.classList.toggle('ligthMode');
  }
}
