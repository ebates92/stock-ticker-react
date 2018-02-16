import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import StockSection from './stock_performance/stocksections';
// import StockDropdown from './stock_performance/stock-dropdown';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Investments from './investments/investment-app'
import StockPerformance from './stock_performance/app-stock-performance'



// axios.get(`${API}/blog`) replace whereever you use fetch

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render(props) {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">MoneyTree</h1>
          </header>
          <div className='nav'>
            <Link to='/'>Stock Performance</Link>
            <Link to='/investments'>Investments</Link>
          </div>

          <Route exact path='/' component={this.StockPerformanceApp}/>
          <Route exact path='/investments' component={this.InvestmentApp}/>
        </div>
      </Router>
    );
  }

  // MAIN COMPONENTS

  StockPerformanceApp = () => (
    <React.Fragment>
            <StockPerformance />
    </React.Fragment>
  )

  InvestmentApp = () => (
    <React.Fragment>
            <Investments />
    </React.Fragment>
  )

}

export default App;
