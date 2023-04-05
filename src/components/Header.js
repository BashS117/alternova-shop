import React from 'react';
import cart from '../assets/icon-cart.svg';
import '../styles/Header.css'
import ShoppingCart from '../containers/ShoppingCart';
import { useState } from 'react';
function Header ()  {
    const [toggle,setToggle]=useState(false);

    return (<nav className=''>
          <h1>ALTERNOVA-SHOP</h1>

          <img onClick={()=>setToggle(!toggle)} className='imgCart' src ={cart} alt='shopingCart' />

          {toggle && <ShoppingCart/>}

    </nav>
        
    );
}

export default Header;