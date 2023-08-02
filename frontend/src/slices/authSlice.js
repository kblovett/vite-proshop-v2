import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('ps-userInfo')
    ? JSON.parse(localStorage.getItem('ps-userInfo'))
    : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('ps-userInfo', JSON.stringify(action.payload));
    },
    clearCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('ps-userInfo');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
