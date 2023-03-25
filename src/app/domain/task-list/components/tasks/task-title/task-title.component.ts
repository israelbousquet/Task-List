import { Component } from '@angular/core';

import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss'],
})
export class TaskTitleComponent {
  constructor(private taskService: TaskService) {}

  deleteAllTasks() {
    this.taskService.deleteAllTasks();
  }
}
