import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img, name, price} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Product;