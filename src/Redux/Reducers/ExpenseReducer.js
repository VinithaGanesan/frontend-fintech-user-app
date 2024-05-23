import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: null,
};

const ExpenseReducer = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addExpense } = ExpenseReducer.actions;

export default ExpenseReducer.reducer;
