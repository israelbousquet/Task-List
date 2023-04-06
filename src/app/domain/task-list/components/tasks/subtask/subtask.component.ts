import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from 'src/app/widgets/edit-dialog/edit-dialog.component';

import { Subtask, Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';

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

  editSubtask(subtaskname: string) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: subtaskname,
    });

    dialogRef.afterClosed().subscribe((inputValue: string) => {
      if (inputValue) {
        this.taskService.editSubtask(
          this.taskIndex,
          this.subtaskIndex,
          inputValue
        );
        this.toastService.showToastSucess('Item editado com sucesso');
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
}
