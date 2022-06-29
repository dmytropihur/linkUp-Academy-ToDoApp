import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import List from './components/List/List';
import MainLayout from './layouts/MainLayout/MainLayout';
import { selectTasks } from './store/tasks/selectors';
import setTasksToLS from './utils/setTasksToLS';

const App: React.FC = () => {
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    setTasksToLS(tasks);
  }, [tasks]);

  return (
    <MainLayout>
      <List />
    </MainLayout>
  );
};

export default App;
