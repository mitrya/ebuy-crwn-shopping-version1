import React from "react";
import "./menu-item.styles.scss"
import {useNavigate} from "react-router-dom";


  
const MenuItem = (props) => {
 
    let navigate = useNavigate();
    
    function handleClick() {
        // console.log(props.linkUrl);
        navigate("/"+props.linkUrl)
    }

    return (
        <div className={`${props.size}  menu-item`}
        
        onClick={handleClick}
        >
              
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${props.imageUrl})`
                    }}
                ></div>

                <div className="content">
                    <h1 className="title">{String(props.title).toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
  
    );
} 

export default MenuItem;


      