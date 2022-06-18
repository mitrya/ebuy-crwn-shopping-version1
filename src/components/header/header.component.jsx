import React from "react";
import "./header.styles.scss"

import {Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({currentUser,hidden}) => {

    return (
        <>
        <div className="header">
          
            <div className="logo-container">
                    <Link to ="/">
                        <Logo/>
                    </Link>
            </div>
        
           <div className="options">
                        
                    <Link className="option" to ="/shop">SHOP</Link> 
    
                    <Link className="option" to ="/contact">CONTACT</Link>

                    {
                         currentUser ? 
                         (<div className="option" style={{cursor:'pointer'}} onClick={()=>{auth.signOut()}}>SIGN OUT</div>)
                         :
                         (<Link className="option" to ="/signIn">SIGN IN</Link>)
                    }
                    <CartIcon/>
           </div>
           {
               hidden?
               null
               :
               <CartDropdown/>

           }
        </div>
          
           
        </>
    )
}

// const mapStateToProps = (state) => ({
//     currentUser:selectCurrentUser(state),
//     hidden:selectCartHidden(state)
//   })
  
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  })
export default connect(mapStateToProps)(Header);
