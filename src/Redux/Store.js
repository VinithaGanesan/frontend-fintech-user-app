import {configureStore } from '@reduxjs/toolkit';
import  AuthReducer  from './Reducers/AuthenticationReducer';
import ExpenseReducer from './Reducers/ExpenseReducer';
import IncomeReducer from './Reducers/IncomeReducer';
import InvestmentReducer from './Reducers/InvestmentReducer';
import LoanReducer from './Reducers/LoanReducer';
import BudgetReducer from './Reducers/BudgetReducer';

const store = configureStore({
    reducer: {
        authreducer:AuthReducer,
        expensereducer:ExpenseReducer,
        incomereducer:IncomeReducer,
        investmentreducer: InvestmentReducer,
        loanreducer: LoanReducer,
        budgetreducer: BudgetReducer,
    },
});

export default store;