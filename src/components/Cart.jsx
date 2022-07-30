import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteProduct, removeFromCart } from '../store/action/action';
import { IconButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom'




const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state?.productState)
    const [subTotal, setSubTotal] = useState()


    useEffect(() => {
        let sub_total = cart?.reduce((total, obj) => total + (obj.price * obj?.count), 0)
        console.log(sub_total);
        setSubTotal(sub_total)

    }, [cart]);

    const handleAddProduct = (data) => {
        dispatch(addToCart(data))
    }

    const handleRemoveProduct = (data) => {
        dispatch(removeFromCart(data))
    }

    const handleDeleteProduct = (data) => {
        dispatch(deleteProduct(data))
    }

    const handleCheckout = () => {
        navigate('/details')
    }




    return (

        <div className='container' style={{ margin: '0rem 2rem' }}>
            <h2>Shopping Cart</h2>
            <div className="cart-container">
                {
                    cart.map((data, i) => {
                        return (
                            <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 2rem' }}>
                                <div>
                                    <img className='cart-image' src={data?.image} />
                                </div>
                                <div className='maintain-space product-title'>{data?.title}</div>
                                <div className='maintain-space' style={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton onClick={() => handleAddProduct(data)}>
                                        <AddIcon className='pointer' style={{ marginRight: '10px' }} />
                                    </IconButton>
                                    <span>{data?.count}</span>
                                    <IconButton onClick={() => handleRemoveProduct(data)}>
                                        <RemoveIcon className='pointer' style={{ marginLeft: '10px' }} />
                                    </IconButton>
                                </div>
                                <div className="maintain-space" style={{ display: 'flex', alignItems: 'center', width: '35px', height: '35px', background: '#eee', justifyContent: 'center', borderRadius: '50%' }}>
                                    <IconButton onClick={() => handleDeleteProduct(data?.id)}>
                                        <DeleteIcon className='pointer' />
                                    </IconButton>
                                </div>
                                <div className="maintain-space product-title">
                                    $ {data?.price}
                                </div>
                            </div>
                        )
                    })
                }
            </div>



            <div style={{ flexDirection: 'column', justifyContent: 'end', textAlign: 'end', marginTop: '.5rem' }}>
                <div style={{ display: 'flex', textAlign: 'end', justifyContent: 'end', marginBottom: '1rem' }}>
                    <div style={{ marginRight: '1rem' }}>Sub-Total:</div>
                    <div>$ {subTotal}</div>
                </div>

                <Button variant="contained" onClick={handleCheckout}>Checkout</Button>
                {/* <Link to="/details">Checkout</Link> */}
            </div>








        </div>
    )
}

export default Cart