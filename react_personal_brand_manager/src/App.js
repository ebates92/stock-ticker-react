import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockSection from './stock_performance/stocksections';
import StockDropdown from './stock_performance/stock-dropdown';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Investments from './investments/investment-app'



// axios.get(`${API}/blog`) replace whereever you use fetch

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

      // Stock Performance Props
      wantNews: false,
      watching_data: {},
      watching_URL_iexTrading: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=vmw,adbe,amzn,fb,nvda,ntdoy,nflx,pstg,wmt,robo,botz,vti,vgt&types=quote,news,chart&range=1m&last=5',
      watching_symbols: ['VMW','ADBE','FB','NVDA','NFLX','PSTG','WMT','ROBO','BOTZ','VIT','VGT'],

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

  render(props) {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Your Personal Stock App</h1>
          </header>
          <div className='nav'>
            <div className='stock performance'><Link to='/'>Stock Performance</Link></div>
            <div className='Investments'><Link to='/investments'>Investments</Link></div>
          </div>

          <Route exact path='/' component={this.StockPerformance}/>
          <Route exact path='/investments' component={this.InvestmentApp}/>
        </div>
      </Router>
    );
  }

  // MAIN COMPONENTS

  StockPerformance = () => (
    <React.Fragment>
      <div className='options'>
        <StockDropdown symbols={this.state.watching_symbols} symbolHandler={this.symbolHandler}/>
        <form>
          <label className="news-toggle">Want news? <input name='want-news' type='checkbox' onChange = {this.newsHandler}/></label>
        </form>
      </div>
      <div className="App-intro">
        <StockSection data={this.state.watching_data} wantNews = {this.state.wantNews} />
      </div>
    </React.Fragment>
  )

  InvestmentApp = () => (
    <React.Fragment>
            <Investments data={this.state.watching_data} />
    </React.Fragment>
  )

  // FUNCTIONS

  newsHandler = (event) => {
    this.setState({
      wantNews: event.target.checked
    })
  }

  symbolHandler = (event) => {
      let newSymbols = event.join()
      let newURL = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${newSymbols}&types=quote,news,chart&range=1m&last=5`
      let newData = {}
      // fetches new API data
      fetch(newURL)
        .then(resp => resp.json())
        .then(stockData => {
          newData = stockData
          this.setState({
            watching_symbols: event,
            watching_URL_iexTrading: newURL,
            watching_data: newData
          })
        })
  }

  
  // componentDidMount() {
  //   console.log('interval')
  //   setInterval(() => {
  //     fetch(this.state.URL_iexTrading)
  //         .then(resp => resp.json())
  //         .then(stockData => {
  //           this.setState({
  //             data: stockData
  //           })
  //         })
  //   },1000);
  // }
  
  componentDidMount() {
    fetch(this.state.watching_URL_iexTrading)
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        watching_data: stockData
      })
    })
  }

}

export default App;
