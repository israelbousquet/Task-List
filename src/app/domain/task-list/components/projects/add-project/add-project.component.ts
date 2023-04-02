import { TaskService } from './../../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from 'src/app/widgets/edit-dialog/edit-dialog.component';

import { Project } from '../../../interfaces/task';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private localStorage: LocalStorageService,
    public dialog: MatDialog,
    public taskService: TaskService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): any {
    this.projects$ = this.taskService.projects$$;
  }

  addProject(taskName: string) {
    // const newProject = {
    //   id: 0,
    //   projectName: taskName,
    //   tasks: [],
    // };
    // this.projects.push(newProject);
    // this.localStorage.set('projects', this.projects);
    const dialogRef = this.dialog.open(EditDialogComponent);

    dialogRef.afterClosed().subscribe((inputValue: string) => {
      if (inputValue) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: 'Tem certeza que deseja adicionar?',
        });

        this.confirmEdit(dialogRef, inputValue);
      }
    });
  }

  confirmEdit(dialogRef: any, inputValue: string) {
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.addProject(inputValue);
        this.toastService.showToastSucess('Projeto adicionado com sucesso');
      }
    });
  }
}
