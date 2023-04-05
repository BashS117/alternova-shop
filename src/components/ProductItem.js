import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProItem.css'
function ProductItem  ({product})  {
    const {addToCart}=useContext(AppContext);
    const handleClick=(cartItem)=>{
        addToCart(cartItem)
        console.log(cartItem);
    }
    return (
        <div className='item'>

            <img className='product-item-image' src={product.image} alt={''}/>
            <h1 className='title-item'>{product.name}</h1>
            <div className='section-add-to-cart'>
                <input></input>
                <p>  {product.stock}  </p>
                <button onClick={()=>handleClick(product)}>ADD TO CART</button>


            </div>

        </div>

    );
}

export default ProductItem;