import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/ModalSlice'
export default configureStore({
  reducer: {
    modal:modalReducer , 
  },
});