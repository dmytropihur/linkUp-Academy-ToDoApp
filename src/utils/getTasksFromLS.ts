import { TaskItem } from '../store/tasks/types';

const getTaskFromLS = () => {
  const data = localStorage.getItem('tasks');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TaskItem[],
  };
};

export default getTaskFromLS;
