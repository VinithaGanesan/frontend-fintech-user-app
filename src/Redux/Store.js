import {configureStore } from '@reduxjs/toolkit';
import  AuthReducer  from './Reducers/AuthenticationReducer';
import ExpenseReducer from './Reducers/ExpenseReducer';
import IncomeReducer from './Reducers/IncomeReducer';
import InvestmentReducer from './Reducers/InvestmentReducer';
import LoanReducer from './Reducers/LoanReducer';

const store = configureStore({
    reducer: {
        authreducer:AuthReducer,
        expensereducer:ExpenseReducer,
        incomereducer:IncomeReducer,
        investmentreducer: InvestmentReducer,
        loanreducer: LoanReducer,
    },
});

export default store;