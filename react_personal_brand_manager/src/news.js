import React, { Component } from 'react';

const News = (props) => {
    console.log(props.news.source)
    const newsList = props.news
        // .filter(headline => (headline.source = 'SeekingAlpha')
        .map((single) => {
            return (<div className='single-headline'>{single.headline}</div>)
    })
    

    return (
        <div className="news">{newsList}</div>
    )
}

export default News;