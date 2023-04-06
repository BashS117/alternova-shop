import React from 'react';
import '../styles/Order.css'
function Order  ({cartItem})  {
    return (

        <div className="my-order-content">
                 

        <div className="order">
         
          <div className="info-item-container">
            <p>{cartItem.name}
            </p>
              <p>X {cartItem.amount}</p>
              <p>{cartItem.unit_price}</p>
              <p>${cartItem.amount*cartItem.unit_price}</p>
          </div>
         
        </div>
      
      </div>
        

        // "id": 1,
        //     "name": "redbull",
        //     "unit_price": 5000,
        //     "stock": 5,
        //     "image"
    );
}

export default Order;