import React from "react";
import "./header.styles.scss"
import {Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {

    return (
        <>
        <div className="header">
          
            <div className="logo-container">
                    <Link to ="/">
                        <Logo/>
                    </Link>
            </div>
        
           <div className="options">
              
               <div className="option">
                    <Link to ="/">SHOP</Link> 
               </div>   

                <div className="option">
                    <Link to ="/contact">CONTACT</Link>
                </div>
         
           </div>
           
        </div>
          
           
        </>
    )
}

export default Header;