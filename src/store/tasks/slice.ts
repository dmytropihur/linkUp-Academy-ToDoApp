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
    toggleCompleteTask(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.completed = !findItem.completed;
      }
    },
    togglePin(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (!findItem) return;

      if (findItem.pinned) {
        // eslint-disable-next-line no-param-reassign
        findItem.pinned = false;
        // eslint-disable-next-line no-param-reassign
        state.items = unpinSort(state.items);
      } else {
        const index = state.items.indexOf(findItem);

        // eslint-disable-next-line no-param-reassign
        findItem.pinned = true;

        const newObj = state.items.splice(index, 1);

        state.items.unshift(newObj[0]);
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleteTask, togglePin } =
  tasksSlice.actions;

export default tasksSlice.reducer;
