import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: null,
};

const IncomeReducer = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income = action.payload;
    },
  },
});

export const { addIncome } = IncomeReducer.actions;

export default IncomeReducer.reducer;
