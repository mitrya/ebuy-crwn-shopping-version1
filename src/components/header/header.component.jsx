import React from "react";
import "./header.styles.scss"
import {Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({currentUser}) => {

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
                   
            
           </div>
           
        </div>
          
           
        </>
    )
}

export default Header;