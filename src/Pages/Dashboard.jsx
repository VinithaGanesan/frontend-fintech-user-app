import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import GetParExpenses from '../components/Output/GetParExpenses';
import { PieChart } from '@mui/x-charts/PieChart';
import { addExpense } from '../Redux/Reducers/ExpenseReducer';
import { getExpenseAPI, getIncomeAPI, getInvestmentAPI, getLoanAPI } from '../utilities/useAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addInvestment } from '../Redux/Reducers/InvestmentReducer';
import { addIncome } from '../Redux/Reducers/IncomeReducer';
import { addLoan } from '../Redux/Reducers/LoanReducer';


export default function Dashboard() {
  const { userId } = useSelector((state) => (state.authreducer));

  const { list } = useSelector((state) => (state.expensereducer));
  const { loan } = useSelector((state) => (state.loanreducer));
  const { income } = useSelector((state) => (state.incomereducer));
  const { investment } = useSelector((state) => (state.investmentreducer));

  const dispatch = useDispatch();

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
  const fetchincomeInfo = () => {
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
          dispatch(addInvestment(result.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
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
    fetchInfo();
    fetchincomeInfo();
    fetchinvestmentInfo();
    fetchloanInfo();
  }, []);


  const totalexpenseAmount = list?.reduce((total, list) => total + list.amount, 0);
  const totalIncomeAmount = income?.reduce((incometotal, income) => incometotal + income.amount, 0);
  const totalInvestmenteAmount = investment?.reduce((investmenttotal, investment) => investmenttotal + investment.amount, 0);
  const totalLoanAmount = loan?.reduce((loantotal, loan) => loantotal + loan.amount, 0);
  const totalbalance = totalIncomeAmount - (totalexpenseAmount + totalInvestmenteAmount + totalLoanAmount)

  return (
    <div>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <GetParExpenses />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid sx={{ marginBottom: "30px" }}>
                <Typography variant='h6'>
                  Total Income = {totalIncomeAmount}
                </Typography>
                <Typography variant='h6'>
                  Total Expenses = {totalexpenseAmount}
                </Typography >
                <Typography variant='h6'>
                  Total Investment = {totalInvestmenteAmount}
                </Typography>
                <Typography variant='h6'>
                  Total Loan = {totalLoanAmount}
                </Typography>
                <Typography variant='h6'>
                  Total Balance = {totalbalance}
                </Typography>
              </Grid>
              <Grid>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: `${totalInvestmenteAmount}`, label: 'Investment' },
                        { id: 1, value: `${totalexpenseAmount}`, label: 'Expense' },
                        { id: 2, value: `${totalLoanAmount}`, label: 'Loan' },

                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>

  )
}
