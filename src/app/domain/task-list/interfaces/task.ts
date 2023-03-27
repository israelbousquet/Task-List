export interface Task {
  id: number;
  taskname: string;
  subtask: Subtask[];
}

export interface Subtask {
  id: number;
  name: string;
  checked: boolean;
}
