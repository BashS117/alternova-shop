import { useState } from "react";

const initialState = {
    cart: [],
}


const useInitialState = () => {
    const [state, setState] = useState(initialState);


    const addToCart = (product,amount) => {
        const cartItemProduct = {
            ...product,
            amount:amount,
            name:product.name,
            unit_price:product.unit_price,
            stock:product.stock,
            image:product.image
        };

        setState({
            ...state,
            cart: [...state.cart, cartItemProduct],
        })
    }


    // const localStorageCart = localStorage.getItem('CART')
    // let parsedCart;
    // if(!localStorageCart){
    //     localStorage.setItem('CART',JSON.stringify([]));
    //     parsedCart=[];

    // }else{
    //     parsedCart = JSON.parse(localStorageCart);
    // }




    return {
        state,
        addToCart,
        
    }

};



export default useInitialState;