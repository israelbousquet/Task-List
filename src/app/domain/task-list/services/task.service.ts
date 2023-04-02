import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

import { Subtask, Task, Project } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  projects: Project[] = [];
  tasks: Task[] = [];

  lastProjectId: number = -1;
  lastTaskId: number = -1;
  lastSubtaskId: number = -1;

  constructor(private localStorageService: LocalStorageService) {
    const taskStorage = this.localStorageService.get('tasks');
    this.tasks = taskStorage;
    this.getProjectsLocalStorage();
  }

  public projects$$ = new BehaviorSubject<Project[]>([]);

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getProjectsLocalStorage() {
    const projectStorage = this.localStorageService.get('projects');
    console.log(projectStorage);
    if (projectStorage.length) {
      return this.projects$$.next(projectStorage);
    }
  }

  addProject(taskName: string) {
    this.projects.map(({ id }) => {
      if (id > this.lastProjectId) this.lastProjectId = id;
    });

    const newProject = {
      id: ++this.lastProjectId,
      projectName: taskName,
      tasks: [],
    };
    this.projects.push(newProject);
    this.localStorageService.set('projects', this.projects);
    this.projects$$.next(this.projects);
  }

  addTask(taskNameValue: string) {
    this.tasks.map(({ id }) => {
      if (id > this.lastTaskId) this.lastTaskId = id;
    });

    const newTask: Task = {
      id: ++this.lastTaskId,
      taskname: taskNameValue,
      subtask: [],
    };

    // this.projects[projectIndex].tasks.push(newTask);
    this.tasks.push(newTask);
    this.localStorageService.set('projects', this.tasks);
  }

  deleteAllTasks() {
    this.tasks.splice(0, this.tasks.length, ...[]);
    this.localStorageService.set('projects', []);
    this.getTotalPercentProgress();
  }

  deleteTask(taskId: number) {
    const findIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(findIndex, 1);
    this.localStorageService.set('projects', this.tasks);

    this.getTotalPercentProgress();
  }

  deleteSubTask(subtaskId: number, taskIndex: number) {
    const findIndex = this.tasks[taskIndex].subtask.findIndex(
      (task) => task.id === subtaskId
    );
    console.log(findIndex);
    this.tasks[taskIndex].subtask.splice(findIndex, 1);
    this.localStorageService.set('projects', this.tasks);
    this.getTotalPercentProgress();
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.lastSubtaskId = -1;

    this.tasks.map(({ subtask }) =>
      subtask.map(({ id }) => {
        if (id > this.lastSubtaskId) this.lastSubtaskId = id;
      })
    );

    const newSubTask: Subtask = {
      id: ++this.lastSubtaskId,
      name: subTaskValue,
      checked: false,
    };
    this.tasks[taskIndex].subtask.push(newSubTask);
    this.localStorageService.set('projects', this.tasks);
    this.getTotalPercentProgress();
  }

  editSubtask(taskIndex: number, subtaskIndex: number, subtaskNew: string) {
    this.tasks[taskIndex].subtask[subtaskIndex].name = subtaskNew;
    this.localStorageService.set('projects', this.tasks);
    this.getTotalPercentProgress();
  }

  public taskPercentage$$ = new BehaviorSubject<number>(0);

  getTotalPercentProgress() {
    const subtaskLength =
      this.tasks.reduce((acc, { subtask }) => {
        return acc + subtask.length;
      }, 0) ?? 0;

    const subtaskCheckedLength =
      this.tasks.reduce((acc, { subtask }) => {
        return (
          acc +
          subtask.reduce((acc, { checked }) => {
            return acc + (checked ? 1 : 0);
          }, 0)
        );
      }, 0) ?? 0;

    const total = Math.floor((subtaskCheckedLength * 100) / subtaskLength);

    if (isNaN(total)) {
      return this.taskPercentage$$.next(0);
    }

    this.taskPercentage$$.next(total);
  }

  checkboxClickedToShowMessage$ = new Subject<boolean>();

  changeCheckbox(id: number) {
    if (this.tasks && this.tasks.length) {
      this.tasks.map(({ subtask }) =>
        subtask.map((subtask) => {
          if (subtask.id === id) {
            subtask.checked = !subtask.checked;
            this.getTotalPercentProgress();
            this.localStorageService.set('projects', this.tasks);
            this.checkboxClickedToShowMessage$.next(false);
            return;
          }
        })
      );
    }
  }
}
