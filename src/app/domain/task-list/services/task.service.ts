import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ProjectDialog } from 'src/app/interfaces/project-dialog';

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
  projectIndex: number;
  actualTasks: Task[];

  public projects$$ = new BehaviorSubject<Project[]>([]);
  public tasks$$ = new BehaviorSubject<Task[]>([]);
  public taskPercentage$$ = new BehaviorSubject<number>(0);
  public checkboxClickedToShowMessage$$ = new BehaviorSubject<boolean>(false);

  constructor(private localStorageService: LocalStorageService) {
    this.getProjectsLocalStorage();
    this.setPercentageInTaskProject();
  }

  initProjectsItemByProjectIndex(projectIndex: number) {
    this.projectIndex = projectIndex;
    this.actualTasks = this.projects[this.projectIndex].tasks;
  }

  getTasks() {
    const findTaskByProjectIndex = this.projects[this.projectIndex].tasks ?? [];
    return this.tasks$$.next(findTaskByProjectIndex);
  }

  getProjectsLocalStorage() {
    const projectStorage = this.localStorageService.get('projects');

    if (projectStorage.length) {
      this.projects = projectStorage;
      return this.projects$$.next(this.projects);
    }

    return projectStorage;
  }

  addProject(projectValue: ProjectDialog, dataOfCreation: string) {
    this.projects.map(({ id }) => {
      if (id > this.lastProjectId) this.lastProjectId = id;
    });

    const newProject = {
      id: ++this.lastProjectId,
      projectName: projectValue.name,
      projectIcon: projectValue.icon.value,
      tasksPercentage: this.taskPercentage$$.getValue(),
      dataCreation: dataOfCreation,
      tasks: [],
    };
    this.projects.push(newProject);
    this.localStorageService.set('projects', this.projects);
    this.projects$$.next(this.projects);
  }

  deleteProject(projectIndex: number) {
    this.projects.splice(projectIndex, 1);
    this.localStorageService.set('projects', this.projects);
    this.projects$$.next(this.projects);
  }

  editProject(projectIndex: number, newValue: string) {
    this.projects[projectIndex].projectName = newValue;
    this.localStorageService.set('projects', this.projects);
  }

  setPercentageInTaskProject(): void {
    this.taskPercentage$$.subscribe((data) => {
      const project = this.projects[this.projectIndex];
      if (project) {
        project.tasksPercentage = data;
      }
    });
    return;
  }

  addTask(taskNameValue: string) {
    this.actualTasks.map(({ id }) => {
      if (id > this.lastTaskId) this.lastTaskId = id;
    });

    const newTask: Task = {
      id: ++this.lastTaskId,
      taskname: taskNameValue,
      subtask: [],
    };

    this.actualTasks.push(newTask);
    this.localStorageService.set('projects', this.projects);
  }

  deleteAllTasks() {
    this.actualTasks.splice(0, this.actualTasks.length, ...[]);
    this.localStorageService.set('projects', this.projects);
    this.getTotalPercentProgress();
  }

  deleteTask(taskId: number) {
    const findIndex = this.actualTasks.findIndex((task) => task.id === taskId);
    this.actualTasks.splice(findIndex, 1);
    this.localStorageService.set('projects', this.projects);

    this.getTotalPercentProgress();
  }

  deleteSubTask(subtaskId: number, taskIndex: number) {
    const findIndex = this.actualTasks[taskIndex].subtask.findIndex(
      (task) => task.id === subtaskId
    );
    this.actualTasks[taskIndex].subtask.splice(findIndex, 1);
    this.localStorageService.set('projects', this.projects);
    this.getTotalPercentProgress();
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.lastSubtaskId = -1;

    this.actualTasks.map(({ subtask }) =>
      subtask.map(({ id }) => {
        if (id > this.lastSubtaskId) this.lastSubtaskId = id;
      })
    );

    const newSubTask: Subtask = {
      id: ++this.lastSubtaskId,
      name: subTaskValue,
      checked: false,
    };
    this.actualTasks[taskIndex].subtask.push(newSubTask);
    this.localStorageService.set('projects', this.projects);
    this.getTotalPercentProgress();
  }

  editSubtask(taskIndex: number, subtaskIndex: number, subtaskNew: string) {
    this.actualTasks[taskIndex].subtask[subtaskIndex].name = subtaskNew;
    this.localStorageService.set('projects', this.projects);
    this.getTotalPercentProgress();
  }

  getTotalPercentProgress() {
    const subtaskLength =
      this.actualTasks.reduce((acc, { subtask }) => {
        return acc + subtask.length;
      }, 0) ?? 0;

    const subtaskCheckedLength =
      this.actualTasks.reduce((acc, { subtask }) => {
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

  changeCheckbox(id: number) {
    if (this.actualTasks && this.actualTasks.length) {
      this.actualTasks.map(({ subtask }) =>
        subtask.map((subtask) => {
          if (subtask.id === id) {
            subtask.checked = !subtask.checked;
            this.getTotalPercentProgress();
            this.localStorageService.set('projects', this.projects);
            this.checkboxClickedToShowMessage$$.next(true);
            return;
          }
        })
      );
    }
  }
}
