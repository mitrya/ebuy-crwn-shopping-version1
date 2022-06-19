import React from "react";
import './checkout.styles.scss'

import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'

import { selectCartItems,selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeChckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems,total}) => 
{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <span className="header-block">Product</span>
                <span className="header-block">Description</span>
                <span className="header-block">Quantity</span>
                <span className="header-block">Remove</span>
            </div>
            {
                cartItems.map(cartItem=>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Use the followning test credit card for payments*
                <br/>
                4242 4242 4242 4242
                Exp - any vaild future date
                cvv any valid 3 digit 123
            </div>
            <StripeChckoutButton price={total} />
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps )(CheckoutPage);