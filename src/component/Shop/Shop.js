import React, { createElement, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    /* Add To Cart  */
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])
    const AddToCart = (product) =>{
        const newBook = [...cart, product];
        if( cart.length === 0 ){
            setCart(newBook);
        }else{
            const newCart = [...cart];
            const index = newCart.findIndex(item=> item.id === product.id);
            if(index === -1){
                setCart(newBook)
            }else{
                newCart[index] = product;
                setCart(newCart);
            }
        }
    };
    
    /* if cart itmes is greater than 4 then show  alert */
    const removeFromCart = id => {
        const newList = cart.filter(item => item.id !== id)
        setCart(newList);
    }
    /* removed all item from cart  */
    const clearCart = () => {
        const newList = [];
        setCart(newList);
        setRandom([]);
    }
    /* Show random item */
    const chooseRandom = () => {
        const random = cart[Math.floor(Math.random()* cart.length)];
        setRandom(random);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        AddToCart ={AddToCart}
                        ></Product> )
                }
            </div>
            <div className="cart-container">
                <div className='cart'>
                    <Cart
                    cart={cart}
                    clearCart={clearCart}
                    removeFromCart={removeFromCart}
                    chooseRandom={chooseRandom}
                    random={random}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;