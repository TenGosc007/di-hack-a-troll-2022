import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: null,
  categoryId: null,
  list: [],
  fake: 0,
  real: 0,
  page: 0,
  result: 0,
  success: true,
  email: '',
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
    calculateResults: (state) => {
      state.result = ((state.fake * 100) / (state.fake + state.real)).toFixed(2);
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
    setEmailState: (state, { payload }) => {
      state.email = payload;
    },
  },
});

export const { setCategory, addFake, addReal, calculateResults, setPage, setSuccess, setEmailState } =
  sentDataSlice.actions;

export const selectUrl = (state) => state.sentData.url;
export const selectList = (state) => state.sentData.list;
export const selectPage = (state) => state.sentData.page;
export const selectCategoryId = (state) => state.sentData.categoryId;
export const selectResult = (state) => state.sentData.result;
export const selectSuccess = (state) => state.sentData.success;
export const selectEmail = (state) => state.sentData.email;

export default sentDataSlice.reducer;
