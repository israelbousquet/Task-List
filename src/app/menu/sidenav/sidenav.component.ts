import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isChecked: boolean = false;
  nameMode: string = 'nightlight_round';
  title = 'task-list';

  ngOnInit() {}

  showFiller = false;

  changed(event: MatSlideToggleChange) {
    this.nameMode = event.checked ? 'light_mode' : 'nightlight_round';
    document.body.classList.toggle('ligthMode');
  }
}
