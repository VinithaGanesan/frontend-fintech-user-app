import { createSlice } from "@reduxjs/toolkit";

export const AuthReducer = createSlice({
    name: "Auth",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setLoggedIn: (state,action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setLoggedIn } = AuthReducer.actions;
export default AuthReducer.reducer;