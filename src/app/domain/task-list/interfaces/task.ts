export interface Project {
  id: number;
  projectName: string;
  projectIcon: string;
  tasksPercentage: number;
  dataCreation: string;
  tasks: Task[];
}

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
