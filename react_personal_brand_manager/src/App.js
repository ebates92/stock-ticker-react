import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockSection from './stocksections';
import StockDropdown from './stock-dropdown'
import axios from 'axios'



// axios.get(`${API}/blog`) replace whereever you use fetch

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      wantNews: false,
      data: {},
      URL_iexTrading: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=vmw&types=quote,news,chart&range=1m&last=5',
      symbols: ['vmw']
    }
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your Stock Tracker</h1>
        </header>
        <div className='nav'>
          <div className='stock performance'>Stock Performance</div>
          <div className='Investments'>Investments</div>
        </div>
        <div className='options'>
          <StockDropdown symbols={this.state.symbols} symbolHandler={this.symbolHandler}/>
          <form>
            <label className="news-toggle">Want news? <input name='want-news' type='checkbox' onChange = {this.newsHandler}/></label>
          </form>
        </div>
        <div className="App-intro">
          <StockSection data={this.state.data} wantNews = {this.state.wantNews}/>
        </div>
      </div>
    );
  }

  newsHandler = (event) => {
    this.setState({
      wantNews: event.target.checked
    })
  }

  symbolHandler = (event) => {
    console.log('made it to the top')
      let newSymbols = event.join()
      let newURL = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${newSymbols}&types=quote,news,chart&range=1m&last=5`
      let newData = {}
      // fetches new API data
      fetch(newURL)
        .then(resp => resp.json())
        .then(stockData => {
          newData = stockData
          this.setState({
            symbols: event,
            URL_iexTrading: newURL,
            data: newData
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
    fetch(this.state.URL_iexTrading)
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        data: stockData
      })
    })
  }

}

export default App;
