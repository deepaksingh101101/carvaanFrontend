// in features/featureSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSomethingTrue: false,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setSomethingTrue(state) {
      state.isSomethingTrue = true;
    },
    setSomethingFalse(state) {
      state.isSomethingTrue = false;
    },
    toggleSomething(state) {
      state.isSomethingTrue = !state.isSomethingTrue;
    },
  },
});

export const { setSomethingTrue, setSomethingFalse, toggleSomething } = featureSlice.actions;

export default featureSlice.reducer;
