import { TaskItem } from '../store/tasks/types';

const unpinSort = (array: TaskItem[]) => {
  const unpinned = array
    .filter((el) => !el.pinned)
    .sort((a, b) => a.createdAt - b.createdAt);

  const pinned = array.filter((el) => !!el.pinned);

  return [...pinned, ...unpinned];
};

export default unpinSort;
