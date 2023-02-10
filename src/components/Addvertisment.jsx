import React from 'react'
import Apple from "../assests/Apple.png";


const Addvertisment = () => {
  return (
    <div className="nav-image" style={{dispaly:"none"}}>
        <div className="nav-img-desc">
            <p>NEW PRODUCT</p>
            <h2>Apple Product</h2>
            <h3>Iphone 14</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci nulla nihil natus odio dolorum.</h5>
            <h4>Discount: 50%</h4>
            <button>SEE PRODUCT</button>
        </div>
        <div className="nav-img">
          <img src={Apple} alt="phone" />
        </div>
      </div>
 
  )
}

export default Addvertisment