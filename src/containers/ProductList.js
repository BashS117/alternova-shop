import React from 'react';
import '../styles/ProductList.css'
import productsData from '../data/products.json';
import ProductItem from '../components/ProductItem';
function ProductList (){
//

    return (
        <div className='main-container'>
            <div className='products-container'>
                
            {productsData.products.map(product => (
          <ProductItem product={product} key={product.name} />
        ))}

            </div>



        </div>
        
    );
}

export default ProductList;