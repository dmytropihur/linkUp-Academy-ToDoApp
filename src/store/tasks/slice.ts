import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import getTasksFromLS from '../../utils/getTasksFromLS';
import unpinSort from '../../utils/unpinSort';

import { TaskItem, TasksSliceState } from './types';

const initialState: TasksSliceState = getTasksFromLS();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<TaskItem>) {
      state.items.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    completeTask(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.completed = !findItem.completed;
      }
    },
    pinTask(state, action: PayloadAction<number>) {
      const newObj = state.items.splice(action.payload, 1);

      newObj[0].pinned = true;
      state.items.unshift(newObj[0]);
    },
    unpinTask(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.pinned = false;
      }

      // eslint-disable-next-line no-param-reassign
      state.items = unpinSort(state.items);
    },
  },
});

export const { addTask, deleteTask, completeTask, pinTask, unpinTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
