import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { id, token } }) => {
      state.user = id;
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;

export default authSlice.reducer;
