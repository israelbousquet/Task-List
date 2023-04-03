import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';

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

  projectIndex: number;
  projectName: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initParamsTask();
    this.getTasks();
    this.getProjectName();
  }

  getProjectName() {
    this.taskService.projects$$.subscribe((projects) => {
      return projects.map((project) => {
        return (this.projectName = project.projectName);
      });
    });
  }

  initParamsTask() {
    const id = this.route.snapshot.params['id'];
    return (this.projectIndex = id);
  }

  getTasks(): any {
    this.tasks$ = this.taskService.getTasks(this.projectIndex);
    this.tasks$.subscribe((res) => console.log(res));
  }

  addTask(taskNameValue: string) {
    this.taskService.addTask(taskNameValue, this.projectIndex);
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.taskService.addSubTask(subTaskValue, taskIndex);
  }
}
