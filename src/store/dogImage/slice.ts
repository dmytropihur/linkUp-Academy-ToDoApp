import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_DOG_API_URL } from '../../constants/constants';

import { DogImageSliceState } from './types';

const initialState: DogImageSliceState = {
  dogImage: {
    message: '',
    status: '',
  },
  status: 'idle',
};

export const fetchDogImage = createAsyncThunk(
  'catFact/fetchDogImage',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios
        .get(BASE_DOG_API_URL)
        .then((response) => response.data);

      return res;
    } catch {
      return rejectWithValue('Error');
    }
  },
);

const dogImageSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogImage.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'pending';
      })
      .addCase(fetchDogImage.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'fulfilled';
        // eslint-disable-next-line no-param-reassign
        state.dogImage = action.payload;
      })
      .addCase(fetchDogImage.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'rejected';
      });
  },
});

export default dogImageSlice.reducer;
