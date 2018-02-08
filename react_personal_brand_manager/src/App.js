import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockSection from './stocksections';
import StockDropdown from './stock-dropdown'
import axios from 'axios'


// axios.get(`${API}/blog`) replace whereever you use fetch

class App extends Component {
  render(props) {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to your Stock Tracker</h1>
      //   </header>
        <StockDropdown />
      //   <div className="App-intro">
      //     <StockSection data={this.props.data}/>
      //   </div>
      // </div>
    );
  }
}

export default App;
