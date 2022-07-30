
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Details from './components/checkout/Details';
import Shipping from './components/checkout/Shipping';
import Payment from './components/checkout/Payment';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function App() {
  const navigate = useNavigate()
  const { is_loading, message, data } = useSelector(state => state?.checkoutState)

  useEffect(() => {
    setTimeout(() => {
      if (!data?.details?.is_submitted && !data?.shipping?.is_submitted && !data?.payment?.is_submitted) {
        navigate('/')
      }
    }, 1000);
  }, [data]);
  return (


    <div className="App">
      {

        is_loading ? <CircularProgress /> :
          message ?
            <div style={{ color: 'green' }}>
              <CheckCircleOutlineIcon />
              <div>{message}</div>
            </div>
            :
            <>
              <Navbar />
              <Routes>
                <Route path='/cart' element={<Cart />} />
                <Route path='/details' element={<Details />} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </>
      }
    </div>


  );
}

export default App;
