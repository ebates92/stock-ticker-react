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
    this.setState({
      symbols: event
    },() => this.updateURL(this.state.symbols))
  }

  updateURL = (symbols) => {
    console.log(symbols)
      let newSymbols = symbols.join()
      this.setState({
        URL_iexTrading: `https://api.iextrading.com/1.0/stock/market/batch?symbols=${newSymbols}&types=quote,news,chart&range=1m&last=5`
      })
  }
  
  
  componentDidMount() {
    fetch(this.state.URL_iexTrading)
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        data: stockData
      })
    })
  }
    
  
  // setInterval(() => {
  //     fetch(URL_iexTrading)
  //         .then(resp => resp.json())
  //         .then(stockData => {
  //             console.log(stockData)
  //             ReactDOM.render(<App data={stockData}/>, document.getElementById('root'));
  //             registerServiceWorker();
  //         })
  // },10000);

}

export default App;
