import { CartActionTypes } from "./cart.types";
import { addItemsToCart } from "./cart.utils";
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
        default:
            return INTITIAL_STATE;
    }
}

export default cartReducer;