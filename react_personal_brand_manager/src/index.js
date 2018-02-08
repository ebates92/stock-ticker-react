import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-bootstrap-typeahead/css/Typeahead.css'

const URL_iexTrading = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=vmw,adbe,amzn,fb,nvda,ntdoy,nflx,pstg,wmt,robo,botz,vti,vgt&types=quote,news,chart&range=1m&last=5'

fetch(URL_iexTrading)
    .then(resp => resp.json())
    .then(stockData => {
        console.log(stockData)
        ReactDOM.render(<App data={stockData}/>, document.getElementById('root'));
        registerServiceWorker();
    })

setInterval(() => {
    fetch(URL_iexTrading)
        .then(resp => resp.json())
        .then(stockData => {
            console.log(stockData)
            ReactDOM.render(<App data={stockData}/>, document.getElementById('root'));
            registerServiceWorker();
        })
},10000);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
