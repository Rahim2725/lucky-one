import React from 'react';
import './Header.css'
import logo from '../../../src/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Books Shop</h1>
        </div>
    );
};

export default Header;