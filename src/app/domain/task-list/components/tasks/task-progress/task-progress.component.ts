import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.scss'],
})
export class TaskProgressComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  progress: number = 0;
  
  ngOnInit(): void {
    this.getProgressFromStorage();
    this.progressReactToChangeCheckbox();
  }

  progressReactToChangeCheckbox() {
    this.taskService.checkboxChanged$.subscribe(() => {
      this.progress = this.taskService.getPercentProgress();
      this.taskService.setStorage('totalCheck', this.progress);
    });
  }

  getProgressFromStorage() {
    const progressStorage = this.taskService.getStorage('totalCheck');
    this.progress = progressStorage;
  }
}
