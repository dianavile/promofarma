import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//AddToCart Action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//Remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//Subtract Quantity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//Add Quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
