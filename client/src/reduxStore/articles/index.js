import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: null,
  categoryId: null,
  list: [],
  fake: 0,
  real: 0,
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
    addFake: (state) => {
      state.fake += 1;
    },
    addReal: (state) => {
      state.real += 1;
    },
  },
});

export const { setCategory } = sentDataSlice.actions;

export const selectUrl = (state) => state.sentData.url;

export default sentDataSlice.reducer;
