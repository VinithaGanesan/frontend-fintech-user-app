import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budget: null,
};

const BudgetReducer = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.budget = action.payload;
    },
  },
});

export const { addBudget } = BudgetReducer.actions;

export default BudgetReducer.reducer;
