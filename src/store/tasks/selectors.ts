import { RootState } from '../store';

export const selectTasks = (state: RootState) => state.tasks;

export const selectTaskItemById = (id: string) => (state: RootState) =>
  state.tasks.items.find((obj) => obj.id === id);
