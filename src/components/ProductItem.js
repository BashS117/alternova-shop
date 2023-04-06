import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProItem.css'
function ProductItem  ({product})  {

    const {addToCart,}=useContext(AppContext);
    const [amount, setAmount] = React.useState(1);
    const [stock, setStock] = React.useState(product.stock);



  const  handleinputChange=(event)=>{
        const value= event.target.value;
        if(value<1){
            setAmount(1)
        }else{
               setAmount(value);
     
        }

    }


    const handleClick=(cartItem)=>{

        if(stock >=amount){
            addToCart(cartItem,amount);
            setAmount(1);
            setStock(stock-amount)
        }else{
            alert("no hay la cantidad que deseas en stock")
        }
        
    }
    return (
        <div className='item'>
            <div className='img-container'>
                <img className='product-item-image' src={product.image} alt={''} />
            </div>
            <h1 className='title-item'>{product.name}</h1>


            <div className='section-add-to-cart'>
                <input
                    type='number'
                    placeholder='desire?'
                    value={amount}
                    onChange={handleinputChange}
                />

                <button
                    // type='submit'
                    onClick={() => handleClick(product, amount)}
                >ADD TO CART</button>
            </div>

            <div
                className='stock-info'>
                <p>STOCK:</p>
                <p> {product.stock}</p>
            </div>
            

        </div>

    );
}

export default ProductItem;