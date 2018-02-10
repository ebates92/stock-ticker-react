import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './investment-app.css';
import SymbolRows from './symbol-rows'


const Investments = (props) => {
    
    return (
        <React.Fragment>
            <div className='options'>
                <button type="button">Add a Stock Purchase</button>
                <button type="button">Edit Stock Purchases</button>
            </div>
            <SymbolRows />
        </React.Fragment>
    )
}

export default Investments;