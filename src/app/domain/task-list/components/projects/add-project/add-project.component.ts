import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Project } from '../../../interfaces/task';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projects: Project[] = [];
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {}

  addProject() {}
}
