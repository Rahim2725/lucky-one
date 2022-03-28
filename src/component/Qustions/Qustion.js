import React from 'react';
import './Qustion.css'

const Qustion = () => {
    return (
        <div className='qustion-contaner'>
           <div className='qustion'>
                <h2>Who rect Work?</h2>
                <p>ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.</p>
           </div>
           <div className='qustion'>
                <h2>Who useState Work?</h2>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. This tutorial serves as a complete guide to the useState Hook in React, the equivalent of this.state/this.setSate for functional components. We’ll cover the following in detail:.</p>
           </div>
        </div>
    );
};

export default Qustion;