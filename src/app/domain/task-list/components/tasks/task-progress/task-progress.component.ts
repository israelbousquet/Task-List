import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

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

  progress$$: Observable<number>;
  progressComplete: number;

  ngOnInit(): void {
    this.taskService.getTotalPercentProgress();
    this.progressBehavior();
    this.showMessageWhenProgressCompleted();
  }

  progressBehavior() {
    this.progress$$ = this.taskService.taskPercentage$$.pipe(
      tap((value) => (this.progressComplete = value))
    );
  }

  showMessageWhenProgressCompleted() {
    this.taskService.checkboxClickedToShowMessage$.subscribe(() => {
      if (this.progressComplete === 100) {
        this.toastService.showGoodJob(
          'Parabéns! Você concluiu todas as tarefas'
        );
      }
    });
  }
}
