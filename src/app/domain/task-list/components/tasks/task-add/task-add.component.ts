import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Project, Task } from '../../../interfaces/task';
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
  projectIcon: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initParamsTask();
    this.getTasks();
    this.getName();
    this.getIconProject();
  }

  getName() {
    this.taskService.projects$$.subscribe((projects: Project[]) => {
      return (this.projectName = projects[this.projectIndex].projectName);
    });
  }

  getIconProject() {
    this.taskService.projects$$.subscribe((projects: Project[]) => {
      return (this.projectIcon = projects[this.projectIndex].projectIcon);
    });
  }

  initParamsTask() {
    const id = this.route.snapshot.params['id'];
    this.taskService.initProjectsItemByProjectIndex(id);
    return (this.projectIndex = id);
  }

  getTasks() {
    this.taskService.getTasks();
    this.tasks$ = this.taskService.tasks$$;
  }

  addTask(taskNameValue: string) {
    this.taskService.addTask(taskNameValue);
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.taskService.addSubTask(subTaskValue, taskIndex);
  }
}
