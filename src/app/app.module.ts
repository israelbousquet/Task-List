import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListDomainModule } from './domain/task-list/task-list.module';
import { ConfirmDialogComponent } from './widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from './widgets/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [AppComponent, ConfirmDialogComponent, EditDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListDomainModule,
    NoopAnimationsModule,
    HotToastModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
