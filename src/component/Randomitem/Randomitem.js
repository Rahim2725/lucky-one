import React from 'react';
import './Randomitem.css'

const Randomitem = ({random}) => {
    const {name, img} = random ;
    return (
        name ? (<div>
            <h4 className='random'>
                Random Selection </h4>

            <h4 className='random-info'>
                <img style={{height: '50px', width: '50px', borderRadius: '50%'}} src={img} alt="" />
                {name}
            </h4>
        </div>) : <div></div>
        
    );
};

export default Randomitem;