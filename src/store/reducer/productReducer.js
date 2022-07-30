import { ADD_TO_CART, DELETE_FROM_CART, LOADING, MESSAGE, REMOVE_FROM_CART, SET_VIEW } from "../action/actionType"

const initialState = {
    items: [],
    cart: [
    ],
    is_loading: true,
    message: null,

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                is_loading: payload?.is_loading
            }

        case MESSAGE:
            return {
                ...state,
                is_loading: false,
                message: "Successfully Payment"
            }

        case SET_VIEW:
            return {
                ...state,
                items: payload?.items || [],
                is_loading: false

            }
        case ADD_TO_CART:
            let result = []
            if (state?.cart?.filter(d => d?.id == payload?.item?.id).length > 0) {
                result = state?.cart?.map((item) => {
                    if (item?.id == payload?.item?.id) {
                        return {
                            ...item,
                            count: item?.count + 1
                        }
                    }
                    return item
                })
            }
            else {
                result = [...state?.cart, { ...payload?.item, count: 1 }]

            }

            return {
                ...state,
                cart: result,


            }
        case REMOVE_FROM_CART:
            let result2 = []
            if (state?.cart?.filter(r => r?.id == payload?.item?.id).length > 0) {
                result2 = state?.cart?.map((item) => {
                    if (item?.id == payload?.item?.id) {
                        if (item?.count > 1) {
                            return {
                                ...item,
                                count: item?.count - 1
                            }
                        }
                    }
                    return item
                })
            }

            return {
                ...state,
                cart: result2
            }

        default:
            return state

        case DELETE_FROM_CART:
            const deleteItem = state?.cart?.filter((element) => element?.id !== payload?.id)
            return {
                ...state,
                cart: deleteItem

            }
    }


}

export default reducer