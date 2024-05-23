import React, { useState } from 'react'
import Select from '../Elements/Select'
import TextInput from '../Elements/TextInput'
import { Budgetcategory } from '../Constants/Constants';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { addBudgetAPI } from '../utilities/useAPI';
import { useSelector } from 'react-redux';
import GetBudget from '../components/Output/GetBudget';

export default function Budget() {
  const { userId } = useSelector((state) => (state.authreducer))

  const initialState = {
    userId: userId,
    type: "",
    date: "",
    value: 0,
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
      fetch(addBudgetAPI, {
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
            sessionStorage.setItem("_tk", result.token);
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
                    id="type"
                    name="type"
                    value={values?.type}
                    onChange={handleChange}
                    options={Budgetcategory}
                  />
                  <TextInput
                    label="Date of Budget"
                    id="date"
                    name="date"
                    placeholder="Select Date of Budget"
                    type="date"
                    value={values["date"]}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Budget value"
                    id="value"
                    name="value"
                    type="number"
                    value={values["value"]}
                    placeholder="Enter value of Budget"
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="outlined">
                    Add Budget
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
                All Budgets
              </Typography>
              <Box
                sx={{
                  width: 'auto',
                  height: 500,
                  overflow: 'auto'
                }}
              >
                <GetBudget />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
