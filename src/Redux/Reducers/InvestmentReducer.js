import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  investment: null,
};

const InvestmentReducer = createSlice({
  name: 'investment',
  initialState,
  reducers: {
    addInvestment: (state, action) => {
      state.investment = action.payload;
    },
  },
});

export const { addInvestment } = InvestmentReducer.actions;

export default InvestmentReducer.reducer;
