import React, { Component } from 'react';
import StockSection from './stocksections';
import StockDropdown from './stock-dropdown';

class StockPerformance extends Component {
    constructor (props) {
        super(props);
        this.state = {
    
          // Stock Performance Props
          wantNews: false,
          watching_data: {},
          watching_URL_iexTrading: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=vmw,adbe,amzn,fb,nvda,ntdoy,nflx,pstg,wmt,robo,botz,vti,vgt&types=quote,news,chart&range=1m&last=5',
          watching_symbols: ['VMW','ADBE','FB','NVDA','NFLX','PSTG','WMT','ROBO','BOTZ','VIT','VGT'],
        }
    }

    // stock dropdown
    // stock performance =>
    // stock sections =>
    // stock section =>
    // stock news
  
    render () {
        return(
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
    }

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

    // API call

    componentDidMount() {
        fetch(this.state.watching_URL_iexTrading)
        .then(resp => resp.json())
        .then(stockData => {
            this.setState({
            watching_data: stockData
            })
        })
    }

    // END OF LINE

}

export default StockPerformance
