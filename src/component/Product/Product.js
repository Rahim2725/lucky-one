import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, AddToCart}) => {
    const {img, name, price} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p></p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=> AddToCart(product)}>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;