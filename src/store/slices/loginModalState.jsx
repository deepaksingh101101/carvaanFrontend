import { createSlice } from '@reduxjs/toolkit';

const loginModalState = createSlice({
    name: "loginModalState",
    initialState: false,
    reducers: {
        setLoginModalTrue: (state, action) => {
            // Update state based on action payload
           return state=true;
        },
        setLoginModalFalse: (state, action) => {
            // Update state based on action payload
           return  state=false;
        }
    }
});

export default loginModalState.reducer;
export const { setLoginModalTrue, setLoginModalFalse } = loginModalState.actions;
