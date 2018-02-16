import React, { Component } from 'react';
import PurchaseRow from './purchase-row';

const PurchaseRows = ({purchases}) => {
    let purchasesArray = Object.keys(purchases).map((a) => {return a})
    console.log(purchasesArray)
    const purchaseRowArray = purchasesArray.map ((position, i) => {
        console.log('looping through the purchases')
        return (
            <PurchaseRow purchase={purchases[position]} />
        )
    })

    return (
        <React.Fragment>{purchaseRowArray}</React.Fragment>
    )
}

export default PurchaseRows;