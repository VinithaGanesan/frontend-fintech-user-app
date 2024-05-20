import React, { useState, useEffect } from 'react';
import { getExpenseAPI } from '../../utilities/useAPI';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Select from '../../Elements/Select';
import TextInput from '../../Elements/TextInput';

export default function GetExpenses() {
    const { userId } = useSelector((state) => (state.authreducer));



    const [allexpenses, setAllexpenses] = useState(null);

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
                    sessionStorage.setItem("_tk", result.token);
                    console.log(result.data);
                    setAllexpenses(result.data)
                } else {

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
        <div>
            <Box>
                <Grid>
                    <div>

                        {allexpenses &&
                            allexpenses.map((dataObj, index) => {
                                return (
                                    <div
                                        style={{
                                            width: "auto",
                                            backgroundColor: "grey",
                                            padding: "5px 25px",
                                            borderRadius: 10,
                                            marginBlock: 10,

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



        </div>
    )
}
