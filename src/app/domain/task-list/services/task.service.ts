import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Task } from '../interfaces/task';
import { Subtask } from './../interfaces/subtask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  lastId: number = -1;
  lastSubtaskId: number = -1;

  constructor() {
    const taskStorage = this.getStorage('tasks');
    this.tasks = taskStorage;
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(taskNameValue: string) {
    this.tasks.map(({ id }) => {
      if (id > this.lastId) this.lastId = id;
    });

    const newTask: Task = {
      id: ++this.lastId,
      taskname: taskNameValue,
      subtask: [],
    };
    this.tasks.push(newTask);
    this.setStorage('tasks', this.tasks);
  }

  deleteAllTasks() {
    this.tasks.splice(0, this.tasks.length, ...[]);
    this.setStorage('tasks', []);
    this.getTotalPercentProgress();
  }

  deleteTask(taskId: number) {
    const findIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(findIndex, 1);
    this.setStorage('tasks', this.tasks);

    this.getTotalPercentProgress();
  }

  deleteSubTask(subtaskId: number, taskIndex: number) {
    const findIndex = this.tasks[taskIndex].subtask.findIndex(
      (task) => task.id === subtaskId
    );
    console.log(findIndex);
    this.tasks[taskIndex].subtask.splice(findIndex, 1);
    this.setStorage('tasks', this.tasks);
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
    this.setStorage('tasks', this.tasks);
    this.getTotalPercentProgress();
  }

  editSubtask(taskIndex: number, subtaskIndex: number, subtaskNew: string) {
    this.tasks[taskIndex].subtask[subtaskIndex].name = subtaskNew;
    this.setStorage('tasks', this.tasks);
    this.getTotalPercentProgress();
  }

  setStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  }

  private checkboxChanged = new BehaviorSubject<number>(0);
  checkboxChangedValue$$ = this.checkboxChanged.asObservable();

  getTotalPercentProgress() {
    const subtaskLength =
      this.tasks.reduce((sum, { subtask }) => {
        return sum + subtask.length;
      }, 0) ?? 0;

    const subtaskCheckedLength =
      this.tasks.reduce((sum, { subtask }) => {
        return (
          sum +
          subtask.reduce((sum, { checked }) => {
            return sum + (checked ? 1 : 0);
          }, 0)
        );
      }, 0) ?? 0;

    const total = Math.floor((subtaskCheckedLength * 100) / subtaskLength);
    console.log(total);
    if (isNaN(total)) {
      return this.checkboxChanged.next(0);
    }

    this.checkboxChanged.next(total);
  }

  checkboxClickedToShowMessage$ = new Subject<boolean>();

  changeCheckbox(id: number) {
    if (this.tasks && this.tasks.length) {
      this.tasks.map(({ subtask }) =>
        subtask.map((subtask) => {
          if (subtask.id === id) {
            subtask.checked = !subtask.checked;
            this.getTotalPercentProgress();
            this.setStorage('tasks', this.tasks);
            this.checkboxClickedToShowMessage$.next(false);
            return;
          }
        })
      );
    }
  }
}
