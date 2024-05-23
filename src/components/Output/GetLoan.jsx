import React, { useEffect } from 'react';
import { getLoanAPI } from '../../utilities/useAPI';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addLoan } from '../../Redux/Reducers/LoanReducer';
import { formatDate } from '../../utilities/dateFormat';

export default function GetLoan() {
  const { userId } = useSelector((state) => (state.authreducer));
  const dispatch = useDispatch();
  const { loan } = useSelector((state) => (state.loanreducer));
  const totalAmount = loan?.reduce((total, loan) => total + loan.amount, 0);
  const totalLoanAmount = totalAmount.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
  });

  const fetchloanInfo = () => {
    return fetch(getLoanAPI, {
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
          dispatch(addLoan(result.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchloanInfo();
  }, []);



  return (
    <Box>
      <Grid >
        <Typography variant='h6'>
          Total Loan Amount = {totalLoanAmount}
        </Typography>
      </Grid>
      <Grid sx={{
        width: 'auto',
        height: 500,
        overflow: 'auto'
      }}>
        <div>
          {loan &&
            loan.map((dataObj, index) => {
              return (
                <div
                  style={{
                    width: "auto",
                    backgroundColor: "grey",
                    padding: "5px 25px",
                    borderRadius: 10,
                    marginBlock: 5,

                  }}
                  key={index}
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
