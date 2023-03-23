import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss'],
})
export class SubtaskComponent implements OnInit {
  @Input() task: Task;
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
