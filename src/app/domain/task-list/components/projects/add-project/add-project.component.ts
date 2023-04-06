import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProjectDialog } from 'src/app/interfaces/project-dialog';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AddDialogComponent } from 'src/app/widgets/add-dialog/add-dialog.component';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';

import { Project } from '../../../interfaces/task';
import { TaskService } from './../../../services/task.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [DatePipe],
})
export class AddProjectComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private localStorage: LocalStorageService,
    public dialog: MatDialog,
    public taskService: TaskService,
    private toastService: ToastService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): any {
    this.projects$ = this.taskService.projects$$;
  }

  deleteAllProjects() {
    const projects = this.taskService.projects$$.getValue();

    if (!projects.length) {
      return this.toastService.showToastError(
        'Não existem projetos para excluir'
      );
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja realmente excluir todos os Projetos?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteAllProjects();
        this.toastService.showToastSucess('Tasks deletadas com sucesso');
      }
    });
  }

  addProject() {
    const dialogRef = this.dialog.open(AddDialogComponent);
    const dataOfCreation = new Date();
    const dataToString =
      this.datePipe.transform(dataOfCreation, 'dd/MM/yyyy') ?? '';

    dialogRef.afterClosed().subscribe((inputValue: ProjectDialog) => {
      if (inputValue) {
        this.taskService.addProject(inputValue, dataToString);
        this.toastService.showToastSucess('Projeto adicionado com sucesso');
      }
    });
  }
}
