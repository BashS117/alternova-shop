import { useState } from "react";

const initialState={
    productscart:[]
}


const useInitialCart= ()=>{
    const [state,setState]=useState(initialState);


const addToCart = (product)=>{
    // const cartItemProduct={
    //     ...product,
    // };

    setState({
        ...state,
        productscart:[...state.productscart, product],
    })
}
    

const [amount,setAmount]=useState(1);
    // const localStorageCart = localStorage.getItem('CART')
    // let parsedCart;
    // if(!localStorageCart){
    //     localStorage.setItem('CART',JSON.stringify([]));
    //     parsedCart=[];

    // }else{
    //     parsedCart = JSON.parse(localStorageCart);
    // }




    return{
        state,
        setState,
        addToCart,
    }
    
};



export default useInitialCart;