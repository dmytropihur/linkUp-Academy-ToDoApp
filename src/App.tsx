import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import MainLayout from './layouts/MainLayout/MainLayout';
import Providers from './providers';
import AppRoutes from './routes';
import { fetchBored } from './store/bored/slice';
import { fetchCatFact } from './store/catFact/slice';
import { fetchDogImage } from './store/dogImage/slice';
import { useAppDispatch } from './store/store';
import { selectTasks } from './store/tasks/selectors';
import { fetchWeather } from './store/weather/slice';
import setTasksToLS from './utils/setTasksToLS';

const App: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTasksToLS(tasks);
  }, [tasks]);

  useEffect(() => {
    dispatch(fetchWeather());
    dispatch(fetchBored());
    dispatch(fetchCatFact());
    dispatch(fetchDogImage());
  }, []);

  return (
    <Providers>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Providers>
  );
};

export default App;
