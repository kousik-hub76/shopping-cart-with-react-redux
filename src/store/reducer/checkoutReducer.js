import { DETAILS, LOADING, MESSAGE, PAYMENT, RESET_FORM, SHIPPING } from "../action/actionType"

const initialState = {
    is_loading: false,
    message: null,

    data: {
        details: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            is_submitted: false,

        },
        shipping: {
            address: "",
            city: "",
            zip: "",
            st: "",
            country: "",
            is_submitted: false,
        },
        payment: {
            name_on_card: "",
            card_number: "",
            cvv: "",
            expiration_date: "",
            is_submitted: false,

        }
    }
}

const checkreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                is_loading: true
            }

        case MESSAGE:
            return {
                ...state,
                is_loading: false,
                message: "Payment Successfull"

            }

        case DETAILS:
            return {
                ...state,
                is_loading: false,
                data: {
                    ...state?.data,
                    details: {
                        ...state?.data?.details,
                        first_name: payload?.data?.first_name,
                        last_name: payload?.data?.last_name,
                        email: payload?.data?.email,
                        phone: payload?.data?.phone,
                        is_submitted: true,
                    }
                }


            }
        case SHIPPING:
            return {
                ...state,
                is_loading: false,
                data: {
                    ...state?.data,
                    shipping: {
                        ...state?.data?.shipping,
                        address: payload?.data?.address,
                        city: payload?.data?.city,
                        zip: payload?.data?.zip,
                        st: payload?.data?.st,
                        country: payload?.data?.country,
                        is_submitted: true,

                    }
                }


            }
        case PAYMENT:
            return {
                ...state,
                is_loading: false,
                data: {
                    ...state?.data,
                    payment: {
                        ...state?.data?.payment,
                        name_on_card: payload?.data?.name_on_card,
                        card_number: payload?.data?.card_number,
                        cvv: payload?.data?.cvv,
                        expiration_date: payload?.data?.expiration_date,
                        is_submitted: true,

                    }
                }


            }

        case RESET_FORM: return {
            ...initialState
        }


        default:
            return state


    }
}

export default checkreducer