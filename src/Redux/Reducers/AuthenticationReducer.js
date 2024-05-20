import { createSlice } from "@reduxjs/toolkit";

export const AuthReducer = createSlice({
    name: "Auth",
    initialState: {
        isLoggedIn: false,
        userId: null,
    },
    reducers: {
        setLoggedIn: (state,action) => {
            state.isLoggedIn = action.payload;
        },
        setUserId: (state,action) => {
            state.userId = action.payload;
        }
    },
});

export const { setLoggedIn, setUserId } = AuthReducer.actions;
export default AuthReducer.reducer;