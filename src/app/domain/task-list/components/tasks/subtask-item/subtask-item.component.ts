import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Subtask } from '../../../interfaces/subtask';
import { Task } from '../../../interfaces/task';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
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
  @Input() index: number;

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }

  editSubtask(subtask: Subtask) {
    const dialogRef = this.dialog.open(EditDialogComponent);

    dialogRef.afterClosed().subscribe((inputValue: string) => {
      if (inputValue) {
        this.taskService.editSubtask(this.task.id, subtask.id, inputValue);
        this.showSucess();
      }
    });
  }

  showSucess() {
    this.dialog.open(PopupConfirmComponent, {
      data: 'Item editado com sucesso',
    });
  }
}
