import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import getUserFromLS from '../../utils/getUserFromLS';

import { UserSliceState } from './types';

const initialState: UserSliceState = getUserFromLS();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.name = action.payload;
    },
    logout(state) {
      // eslint-disable-next-line no-param-reassign
      state.name = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
