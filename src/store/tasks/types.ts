export type TaskItem = {
  id: string;
  task: string;
  createdAt: number;
  pinned: boolean;
  completed: boolean;
};

export interface TasksSliceState {
  items: TaskItem[];
}
