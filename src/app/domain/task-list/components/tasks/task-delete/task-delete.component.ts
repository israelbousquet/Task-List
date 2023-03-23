import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { TaskService } from '../../../services/task.service';
import { ConfirmDialogComponent } from '../../widgets/confirm-dialog/confirm-dialog.component';
import { Task } from './../../../interfaces/task';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent implements OnInit {
  @Input() task: Task;
  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir a Task?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteTask(id);
        this.showToast();
      }
    });
  }

  showToast() {
    this.toast.success('Item excluído com sucesso', {
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
