import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from './reducer/productReducer'
import checkoutReducer from './reducer/checkoutReducer'

const compose = composeWithDevTools(applyMiddleware(thunk))

const state = combineReducers({
    productState: productReducer,
    checkoutState: checkoutReducer
})

const store = createStore(state, compose)
export default store 