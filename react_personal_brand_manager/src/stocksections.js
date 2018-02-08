import React, { Component } from 'react';
import StockSection from './stocksection'


const StockSections = (props) => {
    console.log('StockSections')
    console.log(props)
    let stockNamesArray = Object.keys(props.data).map((a) => {return a})
    const stockArray = stockNamesArray.map((symbol,i) => {
        // returns information to fill the stockArray
        return (
            <StockSection data={props.data[symbol]} symbol={symbol} index={i} wantNews={props.wantNews}/>
        )
    })

    //  returns data back to App.js to be added to the screen
    return (
        <div className='stocks-container'>{stockArray}</div>
    )
}

export default StockSections;