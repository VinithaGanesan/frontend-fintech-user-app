import React, { useState } from 'react'
import Select from '../Elements/Select'
import TextInput from '../Elements/TextInput'
import { category, transactiontype } from '../Constants/Constants';
import { Button } from '@mui/material';
import { addExpenseAPI } from '../utilities/useAPI';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Investment() {
  const { userId } = useSelector((state) => (state.authreducer))

  const initialState = {
    userId: userId,
    transactiontype: "",
    category: "",
    description: "",
    date: "",
    amount: 0,
    value: 0,
  }

  const [values, setValues] = useState(initialState);

  const navigator = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(values){
        fetch(addExpenseAPI, {
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
            } else {
  
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
    console.log(values);
};


  return (
    <div>
       <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <Select
                      label="Select Transaction type"
                      id="transactiontype"
                      name="transactiontype"
                      value={values?.transactiontype}
                      onChange={handleChange}
                      options={transactiontype}
                    />
                    <Select
                      label="Select Category"
                      id="category"
                      name="category"
                      value={values?.category}
                      onChange={handleChange}
                      options={category}
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
                      label="Date of expense"
                      id="date"
                      name="date"
                      placeholder="Select Date of expense"
                      type="date"
                      value={values["date"]}
                      onChange={handleChange}
                    />
                    <TextInput
                      label="Expense amount"
                      id="amount"
                      name="amount"
                      type="number"
                      value={values["amount"]}
                      placeholder="Enter Offer Image"
                      onChange={handleChange}
                    />            
                  <Button type="submit" variant="outlined">
                    Add Investment
                  </Button>
                    <Button
                      onClick={resetForm}
                      variant="outlined"
                    >
                      Reset Form
                    </Button>
                  </div>
                </div>
              </form>





    </div>
  )
}
