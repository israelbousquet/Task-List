import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { TaskService } from '../../../services/task.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';
import { Task } from './../../../interfaces/task';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent {
  @Input() task: Task;
  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private toast: HotToastService,
    private toastService: ToastService
  ) {}

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir a Task?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteTask(id);
        this.toastService.showToastSucess('Item deletado com sucesso');
      }
    });
  }
}
