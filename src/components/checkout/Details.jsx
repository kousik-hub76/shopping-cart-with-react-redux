import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { handleDetails } from '../../store/action/checkoutAction';




const Details = () => {
    const { is_loading, message, data: { details: { first_name, last_name, email, phone } } } = useSelector(state => state?.checkoutState)

    console.log("Message", message);
    console.log("isLoading", is_loading);



    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        setState({ ...state, [e?.target?.name]: e.target.value })
    }

    const goToShipping = () => {
        if (!state.first_name || !state.last_name || !state?.email || !state?.phone) {
            return
        }
        dispatch(handleDetails(state))
        navigate('/shipping');
    }

    // useEffect(() => {
    //     if (!data?.details?.is_submitted && !data?.shipping?.is_submitted && !data?.payment?.is_submitted) {
    //         navigate('/details')
    //     }
    // }, [data]);


    // sync all data from details to state
    useEffect(() => {
        setState({
            ...state,
            first_name, last_name, email, phone
        })
    }, [first_name, last_name, email, phone]);


    return (
        is_loading ? <CircularProgress /> :
            message ?
                <div style={{ color: 'green' }}>
                    <CheckCircleOutlineIcon />
                    <div>{message}</div>
                </div>
                :
                <div className='container checkout-container'>
                    <h4 style={{ color: '#666', margin: '1rem 0' }}>Details Form</h4>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-name"
                                label="First Name"
                                name="first_name"
                                value={state?.first_name}
                                onChange={handleInput}
                                sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                            />
                            <TextField
                                id="outlined-name"
                                label="Last Name"
                                name="last_name"
                                value={state?.last_name}
                                onChange={handleInput}
                                sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                            />
                            <TextField
                                id="outlined-name"
                                label="Email"
                                name="email"
                                value={state?.email}
                                onChange={handleInput}
                                sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                            />
                            <TextField
                                id="outlined-name"
                                label="Phone Number"
                                name="phone"
                                value={state?.phone}
                                onChange={handleInput}
                                sx={{ backgroundColor: '#fff', borderRadius: '5px' }}

                            />

                        </Box>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button variant="contained" color="success" onClick={goToShipping}>Go to Shipping</Button>
                    </div>
                </div>
    )
}

export default Details