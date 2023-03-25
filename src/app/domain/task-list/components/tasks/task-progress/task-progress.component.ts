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
    this.progressBehavior();
    this.showMessageWhenProgressCompleted();
  }

  progressBehavior() {
    this.taskService.checkboxChangedValue$$.subscribe((value: number) => {
      this.progress = value;
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
}
