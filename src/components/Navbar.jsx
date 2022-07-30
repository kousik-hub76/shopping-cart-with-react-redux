import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cart } = useSelector(state => state?.productState)
    return (
        <div className='nav-bar'>
            <div>
                <Link to="/"><h4>OnlineShop</h4></Link>
            </div>
            <div className='nav-bag'>
                <Link to='/cart'>
                    <AddShoppingCartIcon />

                </Link>
                <span className='bag-quantity'>
                    <span>{cart?.length}</span>
                </span>
            </div>
        </div>
    )
}

export default Navbar