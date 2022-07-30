import { DETAILS, LOADING, MESSAGE, PAYMENT, RESET_FORM, SHIPPING } from "./actionType"

export const handleDetails = data => async dispatch => {
    dispatch({
        type: DETAILS,
        payload: { data: data }
    })

}

export const handleShipping = data => async dispatch => {
    dispatch({
        type: SHIPPING,
        payload: { data: data }
    })

}

export const handlePayment = data => async dispatch => {
    dispatch({
        type: PAYMENT,
        payload: { data: data },

    })
    dispatch({
        type: LOADING
    })
    setTimeout(() => {
        dispatch({
            type: MESSAGE
        })
    }, 3000);

    setTimeout(() => {
        dispatch({
            type: RESET_FORM
        })
    }, 5000);

}

export const resetCheckoutForm = () => dispatch => {
    dispatch({
        type: RESET_FORM
    })
}

