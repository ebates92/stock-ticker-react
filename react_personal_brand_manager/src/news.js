import React, { Component } from 'react';

const News = (props) => {

    let newClass = props.wantNews ? 'news news-true' : 'news news-false'

    const newsList = props.news
        // .filter(headline => (headline.source = 'SeekingAlpha')
        .map((single) => {
            return (<div className='single-headline'>{single.headline}</div>)
    })
    
    return (
        <div className={newClass}>{newsList}</div>
    )
}

export default News;