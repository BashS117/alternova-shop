import React from 'react';
import '../styles/Order.css'
function Order  ({cartItem: {name}})  {
    return (

        <div className="my-order-content">
                 

        <div className="order">
         
          <div className="info-item-container">
            <p>{name}
            </p>
              <p>X cantida</p>
              <p></p>
              <p>$precio total</p>
          </div>
         
        </div>
      
      </div>
        
    );
}

export default Order;