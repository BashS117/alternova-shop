import React from 'react';


import Order from '../components/Order';
import '../styles/ShoppingCart.css';
import {useContext} from'react';
import AppContext from '../context/AppContext';

function ShoppingCart  ()  {
const {state}=useContext(AppContext);
const sumTotal=()=>{
    const reducer = (acumulator, currentValue)=>acumulator + currentValue.unit_price*currentValue.amount;
    const sum = state.cart.reduce(reducer,0);
    return sum;
}

const handleCreateOrder = () => {
    const orderData = {
      products: state.cart.map((item) => ({
        name: item.name,
        quantity: item.amount,
        unitPrice: item.unit_price,
        totalPrice: item.amount * item.unit_price,
      })),
      total: sumTotal(),
    };
    const jsonOrderData = JSON.stringify(orderData);
    console.log(jsonOrderData); // Aquí se muestra el objeto JSON en la consola del navegador
  };





    return (
        <div className="shopping-cart-container">

            
        <h1 className="title">Cart</h1>

        <div className='shopping-cart-sections'>

            <p>Product</p>
            <p> Quantity</p>
            <p>Unit price</p>
            <p>Total price</p>



        </div>



        {state.cart.length === 0 && <p className='empty-cart'>Your cart is empty</p>}

        {state.cart.map((cartItem,index) => (
          <Order 
          cartItem={cartItem} 
          key={`orderITEM-${cartItem.id}-${index}`}
           />

        ))} 
        

            <div className='my-order-total-container' >
                <div className='my-order-total' >
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>

                <button 
                onClick={handleCreateOrder} 
                className="checkout-button checkout-total-button ">CREATE ORDER</button>

            </div>





      </div>
    );
}

export default ShoppingCart;