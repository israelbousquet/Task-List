import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';

import { SubtaskComponent } from './components/tasks/subtask/subtask.component';
import { TaskAddInputComponent } from './components/tasks/task-add-input/task-add-input.component';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { TaskProgressComponent } from './components/tasks/task-progress/task-progress.component';
import { TaskTitleComponent } from './components/tasks/task-title/task-title.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskListDomainRoutingModule } from './task-list-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ProjectComponent } from './components/projects/project/project.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskTitleComponent,
    TaskProgressComponent,
    TaskAddComponent,
    TaskComponent,
    TaskAddInputComponent,
    SubtaskComponent,
    TaskDeleteComponent,
    HomeComponent,
    AddProjectComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    TaskListDomainRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    SharedModule,
  ],
})
export class TaskListDomainModule {}
