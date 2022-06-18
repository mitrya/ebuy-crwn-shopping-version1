import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import './cart-dropdown.styles.scss'

import {createStructuredSelector} from 'reselect'
import { Link} from "react-router-dom";


const CartDropdown = ({cartItems,dispatch}) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length?
                
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Link  to="/checkout" onClick={() => dispatch(toggleCartHidden())}>
                  <CustomButton>GO TO CHECKOUT</CustomButton>
            </Link>
        </div>
    )
}

const mapStateToProps = (state)=> createStructuredSelector({
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);