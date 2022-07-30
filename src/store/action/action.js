import { getProduct } from "../api/cart.api"
import { ADD_TO_CART, DELETE_FROM_CART, DETAILS, LOADING, MESSAGE, PAYMENT, REMOVE_FROM_CART, RESET_FORM, SET_VIEW, SHIPPING } from "./actionType"

export const onProductData = () => async dispatch => {
    // dispatch({
    //     type: LOADING,
    //     payload: {
    //         is_loading: true
    //     }
    // })
    const products = await getProduct()
    console.log("res", products);
    if (!products || products.error) {
        dispatch(onMessage(products?.message || "Fail to load"))
        return dispatch({
            type: LOADING,
            payload: {
                is_loading: false
            }
        })
    }

    dispatch({
        type: SET_VIEW,
        payload: {
            items: products || []
        }
    })

}

export const addToCart = (item) => async dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            item: item
        }
    })
}

export const removeFromCart = (item) => async dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            item: item
        }
    })
}

export const deleteProduct = id => async dispatch => {
    dispatch({
        type: DELETE_FROM_CART,
        payload: {
            id
        }
    })
}


export const onMessage = (message = "Test message", type = null) => dispatch => {
    dispatch({
        type: MESSAGE,
        payload: { type: type, message: message }
    })
}

// ----------checkout-----------------

