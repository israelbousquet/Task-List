import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  @Input() projectIndex: number;
  @Output() taskChange = new EventEmitter<string>();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  emitValueToSubtask(value: string) {
    this.taskChange.emit(value);
  }

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }
}
