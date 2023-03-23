import { Task } from './../../../interfaces/task';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../widgets/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent implements OnInit {
  @Input() task: Task;
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir a Task?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.taskService.deleteTask(id);
    });
  }
}
