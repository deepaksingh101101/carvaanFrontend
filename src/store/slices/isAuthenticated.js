
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const isAuthenticated = createSlice({
  name: 'isAuthenticated',
  initialState,
  reducers: {
    setIsAuthenticated(state) {
      state.isLoggedIn = true;
    }
  },
});

export const {
    setIsAuthenticated,
} = isAuthenticated.actions;

export default isAuthenticated.reducer;
