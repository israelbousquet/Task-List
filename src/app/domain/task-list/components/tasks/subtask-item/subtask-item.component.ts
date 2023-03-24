import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { Subtask } from '../../../interfaces/subtask';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';
import { ConfirmDialogComponent } from '../../widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from '../../widgets/edit-dialog/edit-dialog.component';
import { PopupConfirmComponent } from '../../widgets/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-subtask-item',
  templateUrl: './subtask-item.component.html',
  styleUrls: ['./subtask-item.component.scss'],
})
export class SubtaskItemComponent implements OnInit {
  @Input() subtask: Subtask;
  @Input() task: Task;
  @Input() taskIndex: number;
  @Input() subtaskIndex: number;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

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

  confirmEdit(dialogRef: any, inputValue: string) {
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.editSubtask(
          this.taskIndex,
          this.subtaskIndex,
          inputValue
        );
        this.showToast();
      }
    });
  }

  showSucess() {
    this.dialog.open(PopupConfirmComponent, {
      data: 'Item editado com sucesso',
    });
  }

  showToast() {
    this.toast.success('Item atualizado com sucesso', {
      position: 'bottom-center',
      style: {
        border: 'none',
        borderRadius: '10px',
        padding: '16px 24px',
        color: '#ffffff',
        backgroundColor: '#2a282a',
      },
      iconTheme: {
        primary: 'rgb(66, 233, 16)',
        secondary: '#FFFAEE',
      },
    });
  }
}
