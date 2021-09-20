import React from 'react';
import './News.css';

const News = (pops) => {
    const news = pops.data;
    const date = (news.publishedAt).substring(0, 10)
    console.log(news);
    return (
        <div className="news">
            <img className="thumbnail" src={news.urlToImage} alt="" />
            <p className="source"> <small className="source-name">{news.source.name}</small> <small>{date}</small> </p>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a className="read-more" target="_blank" href={news.url}>Read More</a>
        </div>
    );
};

export default News;