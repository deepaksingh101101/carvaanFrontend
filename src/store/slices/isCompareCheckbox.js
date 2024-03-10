// in features/featureSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCompareCheckboxChecked: false,
};

const compareCheckboxSlice = createSlice({
  name: 'isCompareCheckboxChecked',
  initialState,
  reducers: {
    setCompareCheckboxTrue(state) {
      state.isCompareCheckboxChecked = true;
    },
    setCompareCheckboxFalse(state) {
      state.isCompareCheckboxChecked = false;
    },
    toggleIsCompareCheckboxChecked(state) {
      state.isCompareCheckboxChecked = !state.isCompareCheckboxChecked;
    }
  },
});

export const { setCompareCheckboxTrue, setCompareCheckboxFalse, toggleIsCompareCheckboxChecked } = compareCheckboxSlice.actions;

export default compareCheckboxSlice.reducer;
