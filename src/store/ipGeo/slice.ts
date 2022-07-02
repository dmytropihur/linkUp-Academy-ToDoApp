import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_IP_GEO_API_URL } from '../../constants/constants';

import { IpGeoSliceState } from './types';

const initialState: IpGeoSliceState = {
  ipGeo: {
    query: '',
    status: '',
    country: '',
    countryCode: '',
    region: '',
    regionName: '',
    city: '',
    zip: '',
    lat: 0,
    lon: 0,
    timezone: '',
    isp: '',
    org: '',
    as: '',
  },
  status: 'idle',
};

export const fetchIpGeo = createAsyncThunk(
  'ipGeo/fetchIpGeo',
  async (ip: string, { rejectWithValue }) => {
    try {
      const res = await axios
        .get(
          // eslint-disable-next-line max-len
          `${BASE_IP_GEO_API_URL}/${ip}`,
        )
        .then((response) => response.data);

      return res;
    } catch (err) {
      console.log(err);

      return rejectWithValue('Error');
    }
  },
);

const ipGeoSlice = createSlice({
  name: 'ipGeo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpGeo.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'pending';
      })
      .addCase(fetchIpGeo.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'fulfilled';
        // eslint-disable-next-line no-param-reassign
        state.ipGeo = action.payload;
      })
      .addCase(fetchIpGeo.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'rejected';
      });
  },
});

export default ipGeoSlice.reducer;
