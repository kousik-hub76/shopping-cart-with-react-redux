import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleShipping } from '../../store/action/checkoutAction';


const Shipping = () => {
    const { data: { details: { is_submitted }, shipping: { address, city, zip, st, country } } } = useSelector(state => state?.checkoutState)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const [state, setState] = useState({
        address: "",
        city: "",
        zip: "",
        st: "",
        country: ""

    })

    const handleInputAddress = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const backToDetails = () => {
        navigate('/details');
    }

    const goToPayment = () => {
        if (!state?.address || !state?.city || !state?.country || !state?.st || !state?.zip) {
            return
        }
        dispatch(handleShipping(state))
        navigate('/payment');
    }

    useEffect(() => {
        if (!is_submitted) {
            return navigate('/details');
        }
        setState({
            ...state,
            address, city, zip, st, country
        })

    }, [address, city, zip, st, country])

    return (
        <div className='container checkout-container'>
            <h4 style={{ color: '#666', margin: '1rem 0' }}>Shipping Form</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>


                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',



                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="Address"
                        name="address"
                        value={state?.address}
                        onChange={handleInputAddress}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                    <TextField
                        id="outlined-name"
                        label="City"
                        name="city"
                        value={state?.city}
                        onChange={handleInputAddress}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />

                    <TextField
                        id="outlined-name"
                        label="Zip Code"
                        name="zip"
                        value={state?.zip}
                        onChange={handleInputAddress}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />

                    <TextField
                        id="outlined-name"
                        label="State"
                        name="st"
                        value={state?.st}
                        onChange={handleInputAddress}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />

                    <TextField
                        id="outlined-name"
                        label="Country"
                        name="country"
                        value={state?.country}
                        onChange={handleInputAddress}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                </Box>
            </div>
            <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" style={{ marginRight: '10px' }} onClick={backToDetails}>Go back</Button>
                <Button variant="contained" color="success" onClick={goToPayment}>Go to Payment</Button>
            </div>

        </div>
    )
}


export default Shipping