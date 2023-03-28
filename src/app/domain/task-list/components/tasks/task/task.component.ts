import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task;
  @Input() taskIndex: number;
  @Output() taskChange = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  emitValueToSubtask(value: string) {
    this.taskChange.emit(value);
  }

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }
}
