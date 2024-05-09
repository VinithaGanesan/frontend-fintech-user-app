import {configureStore } from '@reduxjs/toolkit';
import  AuthReducer  from './Reducers/AuthenticationReducer';

const store = configureStore({
    reducer: {
        authreducer:AuthReducer,

    },
});

export default store;