import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { SubtaskComponent } from './components/tasks/subtask/subtask.component';
import { TaskAddInputComponent } from './components/tasks/task-add-input/task-add-input.component';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
import { TaskProgressComponent } from './components/tasks/task-progress/task-progress.component';
import { TaskTitleComponent } from './components/tasks/task-title/task-title.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskListDomainRoutingModule } from './task-list-routing.module';
import { SubtaskItemComponent } from './components/tasks/subtask-item/subtask-item.component';
import { ConfirmDialogComponent } from './components/widgets/confirm-dialog/confirm-dialog.component';

import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { EditDialogComponent } from './components/widgets/edit-dialog/edit-dialog.component';
import { PopupConfirmComponent } from './components/widgets/popup-confirm/popup-confirm.component';

@NgModule({
  declarations: [
    HomeComponent,
    TaskTitleComponent,
    TaskProgressComponent,
    TaskAddComponent,
    SubtaskComponent,
    TaskAddInputComponent,
    SubtaskItemComponent,
    ConfirmDialogComponent,
    TaskDeleteComponent,
    EditDialogComponent,
    PopupConfirmComponent,
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
  ],
})
export class TaskListDomainModule {}
