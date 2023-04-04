import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Project, Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initParamsTask();
    this.getTasks();
    this.getName();
    this.resetCount();
  }

  getName() {
    this.taskService.projects$$.subscribe((projects: Project[]) => {
      return (this.projectName = projects[this.projectIndex].projectName);
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

  resetCount() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('tasks')) {
      this.taskService.messageShownCount = 0;
      console.log(this.taskService.messageShownCount);
    }
  }
}
