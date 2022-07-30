import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handlePayment } from '../../store/action/checkoutAction';


const Payment = () => {
    const { data: { details, shipping, payment: { name_on_card, card_number, cvv, expiration_date } } } = useSelector(state => state?.checkoutState)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name_on_card: "",
        card_number: "",
        cvv: "",
        expiration_date: ""

    })

    const handleInputPayment = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const backToShipping = () => {
        navigate('/shipping')
    }

    const handleSubmit = () => {
        if (!state?.name_on_card || !state?.card_number || !state?.cvv || !state?.expiration_date) {
            return
        }
        dispatch(handlePayment(state))
    }

    useEffect(() => {
        if (!details.is_submitted && !shipping.is_submitted) {
            return navigate('/shipping');
        }
        setState({
            ...state,
            name_on_card, card_number, cvv, expiration_date
        })
    }, [name_on_card, card_number, cvv, expiration_date])
    return (
        <div className='container checkout-container'>
            <h4 style={{ color: '#666', margin: '1rem 0' }}>Payment Form</h4>
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
                        label="Name on Card"
                        name="name_on_card"
                        value={state?.name_on_card}
                        onChange={handleInputPayment}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Card Number"
                        name="card_number"
                        value={state?.card_number}
                        onChange={handleInputPayment}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                    <TextField
                        id="outlined-name"
                        label="CVV"
                        name="cvv"
                        value={state?.cvv}
                        onChange={handleInputPayment}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Expiration Date"
                        name="expiration_date"
                        value={state?.expiration_date}
                        onChange={handleInputPayment}
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                </Box>
            </div>
            <div style={{ marginTop: '1rem' }}>
                <Button variant="contained" style={{ marginRight: '10px' }} onClick={backToShipping}>Go back</Button>
                <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Payment