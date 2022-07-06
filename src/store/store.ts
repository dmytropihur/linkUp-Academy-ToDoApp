import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import bored from './bored/slice';
import catFact from './catFact/slice';
import dogImage from './dogImage/slice';
import ipGeo from './ipGeo/slice';
import tasks from './tasks/slice';
import user from './user/slice';
import weather from './weather/slice';

export const store = configureStore({
  reducer: {
    tasks,
    weather,
    catFact,
    dogImage,
    ipGeo,
    bored,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
