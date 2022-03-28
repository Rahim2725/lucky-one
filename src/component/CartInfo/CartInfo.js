import React from 'react';
import {FiDelete} from 'react-icons/fi';
import './CartInfo.css'

const CartInfo = ({removeFromCart, bookInfo}) => {
    const {name, img, id} = bookInfo
    return (
        <div>
            <h4 className='book-info'>
                <img style={{height: '50px', width: '50px', borderRadius: '50%'}} src={img} alt="" />
                 {name}
                 <FiDelete 
                 onClick={() => removeFromCart(id)} className='del-icon' ></FiDelete>
            </h4>
        </div>
    );
};

export default CartInfo;