import React, { Component } from 'react';
import News from './news'

const StockSection = (props) => {
    
    let changePercent = (Math.round(props.data.quote.changePercent*10000))/100
    let isNegative = ((changePercent < 0) ? 'change negative': 'change positive')
    let oneMonthChange = Math.round(((props.data.quote.iexRealtimePrice - props.data.chart[0].close)/props.data.chart[0].close)*10000)/100
    let isNegativeMonth = ((oneMonthChange < 0) ? 'negative': 'positive')

    return (
        <div className='stock-container'>
            <div className="symbol">{props.symbol}</div>
            <div className="stock-numbers">
                <div>
                    <div className="open-price">${props.data.quote.iexRealtimePrice}</div>
                    <div className="fivetwo-high-low">
                        High: ${props.data.quote.week52High} | Low: ${props.data.quote.week52Low}
                    </div>
                </div>
                <div>
                    <div className={isNegative}>{changePercent}%</div>
                    <div className='change-month'>One month: <span className={isNegativeMonth}>{oneMonthChange}%</span></div>
                </div>
            </div>
            <News news={props.data.news}/>
        </div>
    )
}

export default StockSection;