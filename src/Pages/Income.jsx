import React, { useState } from 'react'
import Select from '../Elements/Select'
import TextInput from '../Elements/TextInput'
import { Incomecategory, transactiontype } from '../Constants/Constants';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { addIncomeAPI } from '../utilities/useAPI';
import { useSelector } from 'react-redux';
import GetIncome from '../components/Output/GetIncome';

export default function Income() {
  const { userId } = useSelector((state) => (state.authreducer))

  const initialState = {
    userId: userId,
    transactiontype: "",
    category: "",
    description: "",
    date: "",
    amount: 0,
  }

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values) {
      fetch(addIncomeAPI, {
        method: "POST",
        body: JSON.stringify(values),
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
            resetForm(e);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setValues(initialState);
  };


  return (
    <div>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <form onSubmit={handleSubmit}>

                  <Select
                    label="Select Transaction type"
                    id="transactiontype"
                    name="transactiontype"
                    value={values?.transactiontype}
                    onChange={handleChange}
                    options={transactiontype}
                  />
                  <Select
                    label="Select Income Category"
                    id="category"
                    name="category"
                    value={values?.category}
                    onChange={handleChange}
                    options={Incomecategory}
                  />
                  <TextInput
                    label="Description"
                    id="description"
                    name="description"
                    type="text"
                    value={values["description"]}
                    placeholder="Enter Description"
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Date of Income"
                    id="date"
                    name="date"
                    placeholder="Select Date of Income"
                    type="date"
                    value={values["date"]}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Income amount"
                    id="amount"
                    name="amount"
                    type="number"
                    value={values["amount"]}
                    placeholder="Enter Income Amount"
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="outlined">
                    Add Income
                  </Button>
                  <Button variant="outlined"
                    onClick={resetForm}
                  >
                    Reset Form
                  </Button>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h5'>
                All Income Transactions
              </Typography>
              <Box>
                <GetIncome />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
