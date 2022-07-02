import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_BORED_API_URL } from '../../constants/constants';

import { BoredSliceState } from './types';

const initialState: BoredSliceState = {
  bored: {
    activity: '',
    accessibility: 0,
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
  },
  status: 'idle',
};

export const fetchBored = createAsyncThunk(
  'bored/fetchBored',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios
        .get(
          // eslint-disable-next-line max-len
          BASE_BORED_API_URL,
        )
        .then((response) => response.data);

      return res;
    } catch {
      return rejectWithValue('Error');
    }
  },
);

const boredSlice = createSlice({
  name: 'bored',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBored.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'pending';
      })
      .addCase(fetchBored.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'fulfilled';
        // eslint-disable-next-line no-param-reassign
        state.bored = action.payload;
      })
      .addCase(fetchBored.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'rejected';
      });
  },
});

export default boredSlice.reducer;
