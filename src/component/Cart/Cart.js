import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import './Cart.css'

const Cart = ({cart, clearCart, removeFromCart, chooseRandom, random }) => {
    /* Cart Total Price */
    let total = 0 ;
    for (const price of cart) {
        total= total + price.price ;
    }
    return (
        <div>
            <h3>Selected Books</h3>
            <p>Price: ${total}</p>
            {
                cart.map(bookInfo => <CartInfo
                key={bookInfo.id}
                bookInfo={bookInfo}
                removeFromCart={removeFromCart}
                ></CartInfo>)
            }
        </div>
    );
};

export default Cart;