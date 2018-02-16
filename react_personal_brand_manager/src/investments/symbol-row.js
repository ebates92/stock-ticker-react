import React, { Component } from 'react';
import PurchaseRows from './purchase-rows'

const SymbolRow = ({investment, symbol}) => {

    //  QUANTITY CALCULATIONS

    const mapQuantityValues = (purchase) => {
        return investment[purchase].quantity
    }

    const quantitySum = (total, currentVal) => {
        const currentSum = total + currentVal;
        return currentSum
    }
    
    let totalQuantity = Object.keys(investment).map(mapQuantityValues).reduce(quantitySum,0)


    // AVERAGE PRICE CALCULATIONS

    const mapPriceValues = (purchase) => {
        return investment[purchase].price
    }

    const priceSum = (total, currentVal) => {
        const price = total + currentVal;
        return price
    }
    
    let priceAverage = (Object.keys(investment).map(mapPriceValues).reduce(priceSum,0))/mapPriceValues.length

    return (
        <div className='investment-symbol-container'>
            <div className='investment-symbol'>{symbol}</div>
            <div className='investment-data-points'>
                <div className='investment-data'>{totalQuantity}</div>
                <div className='investment-data'>${priceAverage}<span className='per-share'>/share</span></div>
                <div className='investment-data'>$Value</div>
                <div className='investment-data gain'>
                    <div className='investment-earnings'>$Earned</div>
                    <div className='investment-earnings'>%change</div>
                </div>
            </div>
            <div><PurchaseRows purchases={investment}/></div>
        </div>
    )
}

export default SymbolRow;