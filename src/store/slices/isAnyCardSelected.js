
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAnyCardSelected: false,
  selectedCards: [],
};

const isAnyCardSelectedSlice = createSlice({
  name: 'isAnyCardSelected',
  initialState,
  reducers: {
    setIsAnyCardSelectedTrue(state) {
      state.isAnyCardSelected = true;
    },
    setIsAnyCardSelectedFalse(state) {
      state.isAnyCardSelected = false;
    },
    toggleIsAnyCardSelected(state) {
      state.isAnyCardSelected = !state.isAnyCardSelected;
    },
    addSelectedCard(state, action) {
      state.selectedCards.push(action.payload);
    },
    removeSelectedCard(state, action) {
      state.selectedCards = state.selectedCards.filter(
        card => card.id !== action.payload
      );
    },
    clearSelectedCards(state) {
      state.selectedCards = [];
    },
  },
});

export const {
  setIsAnyCardSelectedFalse,
  setIsAnyCardSelectedTrue,
  toggleIsAnyCardSelected,
  addSelectedCard,
  removeSelectedCard,
  clearSelectedCards,
} = isAnyCardSelectedSlice.actions;

export default isAnyCardSelectedSlice.reducer;
