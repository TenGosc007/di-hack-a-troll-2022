import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: null,
  categoryId: null,
  list: [],
};

export const sentDataSlice = createSlice({
  name: 'sentData',
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.url = payload.url;
      state.categoryId = payload.id;
      state.list = payload.list;
    },
  },
});

export const { setCategory } = sentDataSlice.actions;

export const selectUrl = (state) => state.sentData.url;

export default sentDataSlice.reducer;
