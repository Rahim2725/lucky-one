import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import Randomitem from '../Randomitem/Randomitem';
import './Cart.css'

const Cart = ({cart, clearCart, removeFromCart, chooseRandom, random }) => {
    /* Cart Total Price */
    let total = 0 ;
    for (const price of cart) {
        total= total + price.price ;
    }
    return (
        <div>
            <h3>Selected Books: {cart.length}</h3>
            <p>Price: ${total}</p>
            {
                cart.map(bookInfo => <CartInfo
                key={bookInfo.id}
                bookInfo={bookInfo}
                removeFromCart={removeFromCart}
                ></CartInfo>)
            }

            <Randomitem random={random}></Randomitem>
            <div className='cart-btn'>
                {
                    cart.length > 1 ? <button onClick={chooseRandom}> Choose One For Me</button> : <div></div>
                }
                <br />
                {
                    cart.length > 0 ? <button onClick={clearCart}> Choose Again</button> : <div></div>
                }
            </div>

        </div>
    );
};

export default Cart;