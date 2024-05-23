import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loan: null,
};

const LoanReducer = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    addLoan: (state, action) => {
      state.loan = action.payload;
    },
  },
});

export const { addLoan } = LoanReducer.actions;

export default LoanReducer.reducer;
