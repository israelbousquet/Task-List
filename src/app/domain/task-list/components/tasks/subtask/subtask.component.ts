import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss'],
})
export class SubtaskComponent implements OnInit {
  @Input() task: Task;
  @Input() taskIndex: number;
  @Output() subTaskChange = new EventEmitter<string>();

  panelOpenState = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  emitValue(value: string) {
    this.subTaskChange.emit(value);
  }

  changeCheckbox(id: number) {
    this.taskService.changeCheckbox(id);
  }
}
