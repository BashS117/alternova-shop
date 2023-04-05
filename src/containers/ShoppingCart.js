import React from 'react';
import Order from '../components/Order';
import '../styles/ShoppingCart.css';
import {useContext} from'react';
import AppContext from '../context/AppContext';

function ShoppingCart  ()  {
const {state}=useContext(AppContext);


    return (
        <div className="shopping-cart-container  inactive">
        <h1 className="title">Cart</h1>


        {state.productscart.length === 0 && <p className='empty-cart'>Your cart is empty</p>}

        {state.productscart.map(cartItem=>(
            <Order 
            cartItem={cartItem}
            key={cartItem}
            />
        ))}


        {/* {state.productscart.map(cartItem=>(
            <Order
            cartItem={cartItem}
            key={{cartItem}}
            
            />
        ))} */}

        {/* {state.cart.length === 0 && <p className='empty-cart'>Your cart is empty</p>} */}

        {/* {state.cart.map(cartItem => (
          <Order 
          cartItem={cartItem} 
          key={`orderITEM-${cartItem.id}`}
           />
        ))} */}
        <Order/>

            <div className='my-order-total-container' >
                <div className='my-order-total' >
                    <p>
                        <span>Total</span>
                    </p>
                    {/* <p>${sumTotal()}</p> */}
                </div>

                <button className="checkout-button checkout-total-button ">CREATE ORDER</button>

            </div>





      </div>
    );
}

export default ShoppingCart;