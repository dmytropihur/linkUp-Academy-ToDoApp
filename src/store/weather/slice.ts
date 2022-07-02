import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  BASE_WEATHER_API_URL,
  DEFAULT_WEATHER_LOCATION,
  WEATHER_API_KEY,
} from '../../constants/constants';
import transformWeatherData from '../../utils/transformWeatherData';

import { WeatherObject, WeatherSliceState } from './types';

const initialState: WeatherSliceState = {
  weather: {
    coord: {
      log: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    base: '',
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
      feels_like: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    id: 0,
    name: '',
    cod: 0,
  },
  status: 'idle',
};

export const fetchWeather = createAsyncThunk<WeatherObject>(
  'weather/fetchWeather',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios
        .get(
          // eslint-disable-next-line max-len
          `${BASE_WEATHER_API_URL}?lat=${DEFAULT_WEATHER_LOCATION.lat}&lon=${DEFAULT_WEATHER_LOCATION.lon}&appid=${WEATHER_API_KEY}`,
        )
        .then((response) => response.data);

      return res;
    } catch {
      return rejectWithValue('Error');
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'pending';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'fulfilled';
        // eslint-disable-next-line no-param-reassign
        state.weather = transformWeatherData(action.payload);
      })
      .addCase(fetchWeather.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'rejected';
      });
  },
});

export default weatherSlice.reducer;
