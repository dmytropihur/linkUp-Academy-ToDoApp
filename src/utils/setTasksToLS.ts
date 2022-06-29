import { TasksSliceState } from '../store/tasks/types';

const setTasksToLS = (arr: TasksSliceState) => {
  localStorage.setItem('tasks', JSON.stringify(arr.items));
};

export default setTasksToLS;
