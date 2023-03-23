import { TaskService } from '../../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  // tasks: Task[] = [];
  tasks$: Observable<Task[]>;
  lastId = -1;
  lastSubtaskId = -1;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): any {
    this.tasks$ = this.taskService.getTasks();
  }

  addTask(taskNameValue: string) {
    this.taskService.addTask(taskNameValue);
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.taskService.addSubTask(subTaskValue, taskIndex);
  }
}
