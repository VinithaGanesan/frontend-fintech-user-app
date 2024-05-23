import React, { useEffect } from 'react';
import { getExpenseAPI, getInvestmentAPI } from '../../utilities/useAPI';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../Redux/Reducers/ExpenseReducer';
import { addInvestment } from '../../Redux/Reducers/InvestmentReducer';


export default function GetInvestment() {
  const { userId } = useSelector((state) => (state.authreducer));
  const dispatch = useDispatch();
  const { investment } = useSelector((state) => (state.investmentreducer));
  const totalAmount = investment?.reduce((total, investment) => total + investment.amount, 0);
  const totalInvestmenteAmount = totalAmount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
  });


  const fetchinvestmentInfo = () => {
    return fetch(getInvestmentAPI, {
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
          sessionStorage.setItem("_tk", result.token);
          dispatch(addInvestment(result.data));

        } else {

        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchinvestmentInfo();
}, []);

  return (
    <Box>
    <Grid >
        <Typography variant='h6'>
            Total Investment = {totalInvestmenteAmount}
        </Typography>
    </Grid>
    <Grid sx={{
          width: 'auto',
          height: 500,
          overflow: 'auto'
        }}>
        <div>
            {investment &&
                investment.map((dataObj, index) => {
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
                                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.date}</p>
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
