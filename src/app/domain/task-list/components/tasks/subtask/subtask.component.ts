import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { Task, Subtask } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from 'src/app/widgets/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss'],
})
export class SubtaskComponent {
  @Input() subtask: Subtask;
  @Input() task: Task;
  @Input() taskIndex: number;
  @Input() subtaskIndex: number;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private toast: HotToastService,
    private toastService: ToastService
  ) {}

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }

  editSubtask(subtask: Subtask) {
    const dialogRef = this.dialog.open(EditDialogComponent);

    dialogRef.afterClosed().subscribe((inputValue: string) => {
      if (inputValue) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: 'Deseja realmente editar?',
        });

        this.confirmEdit(dialogRef, inputValue);
      }
    });
  }

  deleteSubtask(subtask: Subtask, taskIndex: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir a Subtask?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteSubTask(subtask.id, taskIndex);
        this.toastService.showToastSucess('Subtask deletada com sucesso');
      }
    });
  }

  confirmEdit(dialogRef: any, inputValue: string) {
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.editSubtask(
          this.taskIndex,
          this.subtaskIndex,
          inputValue
        );
        this.toastService.showToastSucess('Item editado com sucesso');
      }
    });
  }
}
