import { configureStore } from '@reduxjs/toolkit';
import loginModalState from './slices/loginModalState';

const store = configureStore({
    reducer: {
        loginModalState: loginModalState,
    },
});

export default store;