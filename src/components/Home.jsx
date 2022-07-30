import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, onProductData } from '../store/action/action';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { CircularProgress } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch()
    const { items, is_loading } = useSelector(state => state.productState)


    useEffect(() => {
        dispatch(onProductData())
    }, []);

    const handleAddCart = (product) => {
        dispatch(addToCart(product))

    }


    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>

            {is_loading ?
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} >
                    <CircularProgress />
                </div>
                :
                items.map((d, i) => {
                    return (

                        <div>
                            <Card sx={{ maxWidth: '18rem', background: '#fff', margin: '10px 10px', padding: '15px 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <img className='product-image' src={d?.image} />
                                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '.2rem' }}>
                                        {/* <ReactReadMoreReadLess
                                            readMoreClassName="readMoreClassName"
                                            charLimit={20}
                                            readMoreText="Read More"
                                            readLessText="Read Less"
                                        > */}
                                        {d?.title}
                                        {/* </ReactReadMoreReadLess> */}

                                    </div>
                                    <div className='rating'>
                                        Rate: <span>{d?.rating?.rate}</span> Reviews: {d?.rating?.count} peoples
                                    </div>

                                    <div style={{ fontSize: '15px' }}>
                                        <ReactReadMoreReadLess
                                            readMoreClassName="readMoreClassName"
                                            readLessClassName="readLessClassName"
                                            charLimit={80}
                                            readMoreText="Read more"
                                            readLessText="Read less"
                                        >
                                            {d?.description}
                                        </ReactReadMoreReadLess>
                                    </div>
                                    <div style={{ fontWeight: '600', color: '#f54e31', marginTop: '.5rem' }}>$ {d?.price}</div>
                                </div>
                                <Button variant="outlined" color="warning" onClick={() => handleAddCart(d)}> Add to Cart</Button>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home