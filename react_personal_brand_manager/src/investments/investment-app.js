import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './investment-app.css';
import SymbolRows from './symbol-rows'


class Investments extends Component {
    constructor (props) {
        super(props);
        this.state = {

            // Stock Investment Props
            investment_data: {},
            investment_URL_iexTrading: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=vmw,adbe,amzn,fb,nvda,ntdoy,nflx,pstg,wmt,robo,botz,vti,vgt&types=quote,news,chart&range=1m&last=5',
            investment_symbols: ['VMW','ADBE','FB','NVDA','NFLX','PSTG','WMT','ROBO','BOTZ','VIT','VGT'],
            investment_history: {
                'VMW': [
                    { date_purchased: '12/30/2016',
                    quantity: 10,
                    price: 120,
                    status: 'own'
                    },
                    { date_purchased: '09/30/2017',
                    quantity: 5,
                    price: 150,
                    status: 'own'
                    },
                    { date_purchased: '1/30/2018',
                    quantity: 8,
                    price: 100,
                    status: 'sold'
                    },
                ],
                'NVDA': [
                    { date_purchased: '12/30/2017',
                    quantity: 1,
                    price: 50,
                    status: 'own'
                    },
                    { date_purchased: '09/30/2017',
                    quantity: 8,
                    price: 200,
                    status: 'own'
                    },
                    { date_purchased: '1/30/2018',
                    quantity: 11,
                    price: 250,
                    status: 'sold'
                    },
                ],
            }
        }
    }

    //  Investment App -->
    //  Symbol Rows -->
    //  Symbol Row -->
    //  Purchase Rows -->
    //  Purchase Row

    render () {
        return (
            <React.Fragment>
                <div className='options'>
                    <button type="button">Add a Stock Purchase</button>
                    <button type="button">Edit Stock Purchases</button>
                </div>
                <div className='investments-container'>
                    <div className='investment-symbol-container'>
                        <div className='investment-symbol-header'>Symbol</div>
                        <div className='investment-data-header'>
                            <div className='investment-column-header'>Shares</div>
                            <div className='investment-column-header'>Cost/Share</div>
                            <div className='investment-column-header'>Value</div>
                            <div className='investment-column-header'>Gain</div>
                        </div>
                    </div>
                    <SymbolRows investments={this.state.investment_history}/>
                </div>
            </React.Fragment>
        )
    }

    //  END OF LINE

}

export default Investments;