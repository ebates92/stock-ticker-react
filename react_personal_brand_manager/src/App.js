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
          <StockDropdown />
          <form>
            <label className="news-toggle">Want news? <input name='want-news' type='checkbox' onChange = {this.newsHandler}/></label>
          </form>
        </div>
        <div className="App-intro">
          <StockSection data={this.props.data} wantNews = {this.state.wantNews}/>
        </div>
      </div>
    );
  }

  newsHandler = (event) => {
    this.setState({
      wantNews: event.target.checked
    })
  }
}

export default App;
