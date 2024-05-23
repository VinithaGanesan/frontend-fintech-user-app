import React, { useEffect } from 'react';
import { getExpenseAPI } from '../../utilities/useAPI';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../Redux/Reducers/ExpenseReducer';
import { formatDate } from '../../utilities/dateFormat';

export default function GetBudget() {
  const { userId } = useSelector((state) => (state.authreducer));
  const dispatch = useDispatch();
  const { budget } = useSelector((state) => (state.budgetreducer));

  const fetchInfo = () => {
    return fetch(getExpenseAPI, {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if (result.success) {
          dispatch(addExpense(result.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <Box>
      <Grid sx={{
        width: 'auto',
        height: 500,
        overflow: 'auto'
      }}>
        <div>
          {budget &&
            budget.map((dataObj, index) => {
              return (
                <div
                  style={{
                    width: "auto",
                    backgroundColor: "grey",
                    padding: "5px 25px",
                    borderRadius: 10,
                    marginBlock: 5,

                  }}
                  key={dataObj.index}
                >
                  <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <p style={{ fontSize: 20, color: 'white' }}>{dataObj.category}</p>
                    <p style={{ fontSize: 20, color: 'white' }}>{dataObj.transactiontype}</p>
                  </Grid>
                  <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <p style={{ fontSize: 20, color: 'white' }}>{formatDate(dataObj.date)}</p>
                    <p style={{ fontSize: 20, color: 'white' }}>Rs{dataObj.amount}</p>
                  </Grid>
                </div>
              );
            })}
        </div>
      </Grid>
    </Box>
  )
}
