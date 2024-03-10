// in store.js or wherever you configure your Redux store

import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './slices/featureSlice'
import isCompareCheckboxCheckedReducer from './slices/isCompareCheckbox'
import isAnyCardSelectedReducer from './slices/isAnyCardSelected'

const store = configureStore({
  reducer: {
    feature: featureReducer,
    compareCheckbox:isCompareCheckboxCheckedReducer,
    isAnyCard:isAnyCardSelectedReducer,
    // other reducers...
  },
  devTools:true
});

export default store;
