import { CartActionTypes } from "./cart.types";
import { addItemsToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";
const INTITIAL_STATE = {
    hidden : true,
    cartItems:[]
};

const cartReducer = (state=INTITIAL_STATE,action) => {
    
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return{
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id!= action.payload.id)
        }
        default:
            return INTITIAL_STATE;
    }
}

export default cartReducer;