import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

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
    for (const task of this.tasks) {
      if (task.id > this.lastId) {
        this.lastId = task.id;
      }
    }

    const newTask: Task = {
      id: ++this.lastId,
      taskname: taskNameValue,
      subtask: [],
    };
    this.tasks.push(newTask);
    this.setStorage('tasks', this.tasks);
  }

  deleteTask(taskId: number) {
    const findIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(findIndex, 1);
    this.setStorage('tasks', this.tasks);
    this.removeTaskStorage(taskId);
    this.checkboxChangedSource.next(0);
  }

  addSubTask(subTaskValue: string, taskIndex: number) {
    this.lastSubtaskId = -1;
    for (const task of this.tasks) {
      for (const subtask of task.subtask) {
        if (subtask.id > this.lastSubtaskId) {
          this.lastSubtaskId = subtask.id;
        }
      }
    }
    const newSubTask: Subtask = {
      id: ++this.lastSubtaskId,
      name: subTaskValue,
      checked: false,
    };
    this.tasks[taskIndex].subtask.push(newSubTask);
    this.setStorage('tasks', this.tasks);
    this.checkboxChangedSource.next(0);
  }

  editSubtask(taskIndex: number, subtaskIndex: number, subtaskNew: string) {
    this.tasks[taskIndex].subtask[subtaskIndex].name = subtaskNew;
    this.setStorage('tasks', this.tasks);
  }

  setStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  }

  removeTaskStorage(id: number) {
    const actualTasks = this.getStorage('tasks');
    const newTasks = actualTasks.filter((task: Task) => task.id !== id);
    this.setStorage('tasks', newTasks);
  }

  getCheckedSubTasks(): number {
    let count = 0;
    for (const task of this.tasks) {
      for (const subTask of task.subtask) {
        if (subTask.checked) {
          count++;
        }
      }
    }
    return count;
  }

  getTotalSubtasks(): number {
    let count = 0;
    for (const task of this.tasks) {
      count += task.subtask.length;
    }
    return count;
  }

  getPercentProgress() {
    const totalChecked = this.getCheckedSubTasks();
    const totalSubTasks = this.getTotalSubtasks();
    const total = (totalChecked * 100) / totalSubTasks;

    return Math.floor(total);
  }

  private checkboxChangedSource = new Subject<number>();
  checkboxChanged$ = this.checkboxChangedSource.asObservable();

  changeCheckbox(id: number) {
    if (this.tasks && this.tasks.length) {
      for (const task of this.tasks) {
        for (const subTask of task.subtask) {
          if (subTask.id === id) {
            subTask.checked = !subTask.checked;
            this.getPercentProgress();
            this.setStorage('tasks', this.tasks);
            this.checkboxChangedSource.next(0);
            return;
          }
        }
      }
    }
  }
}
