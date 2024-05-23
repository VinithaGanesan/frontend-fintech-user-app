import React, { useEffect } from 'react';
import { getIncomeAPI } from '../../utilities/useAPI';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../../Redux/Reducers/IncomeReducer';

export default function GetIncome() {

  const { userId } = useSelector((state) => (state.authreducer));
  const dispatch = useDispatch();
  const { income } = useSelector((state) => (state.incomereducer));
  const totalincomeAmount = income?.reduce((total, income) => total + income.amount, 0);
  const totalIncome = totalincomeAmount.toLocaleString("en-US", {style:"currency", currency:"INR"});


  const fetchInfo = () => {
    return fetch(getIncomeAPI, {
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
          dispatch(addIncome(result.data));
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
      <Grid>
        <Typography variant='h6'>
          Total Expense = {totalIncome}
        </Typography>
      </Grid>
      <Grid sx={{
        width: 'auto',
        height: 500,
        overflow: 'auto'
      }}>
        <div>
          {income &&
            income.map((dataObj, index) => {
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
