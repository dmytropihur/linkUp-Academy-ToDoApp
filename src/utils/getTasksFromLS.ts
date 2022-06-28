import { TaskItem } from '../store/tasks/types';

const getCartFromLS = () => {
  const data = localStorage.getItem('tasks');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TaskItem[],
  };
};

export default getCartFromLS;
