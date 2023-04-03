import { Project } from '../../../interfaces/task';
import { TaskService } from './../../../services/task.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() projectIndex: number;

  taskPercentage: number;

  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.countTaskPercentage();
  }

  countTaskPercentage() {
    this.taskPercentage = this.project.tasksPercentage;
  }
}
