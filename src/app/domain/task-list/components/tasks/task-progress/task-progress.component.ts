import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../../services/task.service';
import { ToastService } from './../../../services/toast.service';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.scss'],
})
export class TaskProgressComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private toastService: ToastService
  ) {}

  progress: number = 0;

  ngOnInit(): void {
    this.getProgressFromStorage();
    this.progressReactToChangeCheckbox();
    this.showMessageWhenProgressCompleted();
  }

  progressReactToChangeCheckbox() {
    this.taskService.checkboxChanged$.subscribe(() => {
      const progress = this.taskService.getPercentProgress();
      console.log(progress);
      this.progress = progress;
      this.taskService.setStorage('totalCheck', this.progress);
    });
  }

  showMessageWhenProgressCompleted() {
    this.taskService.checkboxClickedToShowMessage$.subscribe(() => {
      if (this.progress === 100) {
        this.toastService.showGoodJob(
          'Parabéns! Você concluiu todas as tarefas'
        );
      }
    });
  }

  getProgressFromStorage() {
    const progressStorage = this.taskService.getStorage('totalCheck') ?? 0;
    this.progress = progressStorage;
  }
}
