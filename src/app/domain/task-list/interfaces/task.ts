import { Subtask } from './subtask';

export interface Task {
  id: number;
  taskname: string;
  subtask: Subtask[];
}
