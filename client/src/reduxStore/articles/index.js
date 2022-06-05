import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: null,
  categoryId: null,
  list: [],
  fake: 0,
  real: 0,
  page: 0,
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
    calculateResults: ({ fake, real }) => {
      (fake * 100) / (fake + real);
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setCategory, addFake, addReal } = sentDataSlice.actions;

export const selectUrl = (state) => state.sentData.url;
export const selectList = (state) => state.sentData.list;
export const selectPage = (state) => state.sentData.page;
export const selectCategoryId = (state) => state.sentData.categoryId;

export default sentDataSlice.reducer;
