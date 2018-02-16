import React, { Component } from 'react';
import SymbolRow from './symbol-row'

const SymbolRows = (props) => {
    let investmentsArray = Object.keys(props.investments).map((a) => {return a})
    console.log(investmentsArray)
    const symbolRowArray = investmentsArray.map ((symbol, i) => {
        return (
            <SymbolRow investment={props.investments[symbol]} symbol={symbol} index={i} />
        )
    })

    return (
        <React.Fragment>{symbolRowArray}</React.Fragment>
    )
}

export default SymbolRows;