import React from 'react';
import cart from '../assets/icon-cart.svg';
import '../styles/Header.css'
import ShoppingCart from '../containers/ShoppingCart';
import { useState } from 'react';
function Header ()  {
    const [toggle,setToggle]=useState(false);

    return (<nav className=''>
        <div className='navbar-left navbar'>        
          <h1>ALTERNOVA-SHOP</h1>
        </div>

        <div className='navbar-rigth navbar'>
            <img onClick={() => setToggle(!toggle)} className='imgCart' src={cart} alt='shopingCart' />
        </div>
          {toggle && <ShoppingCart/>}

    </nav>
        
    );
}

export default Header;