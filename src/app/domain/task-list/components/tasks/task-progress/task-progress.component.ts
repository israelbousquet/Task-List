import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, skip } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

import { TaskService } from '../../../services/task.service';

@UntilDestroy()
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
  progress: number;

  ngOnInit(): void {
    this.taskService.getTotalPercentProgress();
    this.progressBehavior();
    this.showMessageWhenProgressCompleted();
  }

  progressBehavior() {
    this.taskService.taskPercentage$$.subscribe((value: number) => {
      return (this.progress = value);
    });
  }

  callMessage: boolean = false;

  showMessageWhenProgressCompleted() {
    if (this.callMessage) {
      return;
    }
    setTimeout(() => {
      this.callMessage = false;
    }, 5000);

    this.taskService.checkboxClickedToShowMessage$$
      .pipe(untilDestroyed(this), skip(1))
      .subscribe((value: boolean) => {
        if (value && this.progress === 100) {
          this.callMessage = true;
          this.toastService.showGoodJob(
            'Parabéns! Você concluiu todas as tarefas'
          );
        }
      });
  }
}
