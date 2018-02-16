import React, { Component } from 'react';

const PurchaseRow = ({purchase}) => {
    console.log(purchase)
    return (
        <div className='investment-symbol-container'>
            <div className='investment-symbol'></div>
            <div className='investment-data-points'>
                <div className='investment-data'>{purchase.quantity}</div>
                <div className='investment-data'>${purchase.price}</div>
                <div className='investment-data'>$Value</div>
                <div className='investment-data gain'>
                    <div className='investment-earnings'>$Earned</div>
                    <div className='investment-earnings'>%change</div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseRow;