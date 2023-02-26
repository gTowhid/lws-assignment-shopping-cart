import { ADDPRODUCT, ADDTOCART, INCREASECART, DECREASECART, DELETECARTPRODUCT } from './actionTypes'

export const addProduct = (product) => {
    return {
        type: ADDPRODUCT,
        payload: product
    }
}


/* these functions might also be in cart slice */
export const addToCart = (id) => {
    return {
        type: ADDTOCART,
        payload: id
    }
}

export const increaseCart = (id) => {
    return {
        type: INCREASECART,
        payload: id
    }
}

export const decreaseCart = (id) => {
    return {
        type: DECREASECART,
        payload: id
    }
}

export const deleteCartProduct = (id) => {
    return {
        type: DELETECARTPRODUCT,
        payload: id
    }
}

