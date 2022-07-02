import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_CAT_API_URL } from '../../constants/constants';

import { CatFactSliceState } from './types';

const initialState: CatFactSliceState = {
  catFact: {
    fact: '',
    length: 0,
  },
  status: 'idle',
};

export const fetchCatFact = createAsyncThunk(
  'catFact/fetchCatFact',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios
        .get(
          // eslint-disable-next-line max-len
          BASE_CAT_API_URL,
        )
        .then((response) => response.data);

      return res;
    } catch {
      return rejectWithValue('Error');
    }
  },
);

const catFactSlice = createSlice({
  name: 'catFact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatFact.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'pending';
      })
      .addCase(fetchCatFact.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'fulfilled';
        // eslint-disable-next-line no-param-reassign
        state.catFact = action.payload;
      })
      .addCase(fetchCatFact.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'rejected';
      });
  },
});

export default catFactSlice.reducer;
