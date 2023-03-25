import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() taskIndex: number;
  @Output() taskChange = new EventEmitter<string>();

  panelOpenState = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  emitValue(value: string) {
    this.taskChange.emit(value);
  }

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }
}
