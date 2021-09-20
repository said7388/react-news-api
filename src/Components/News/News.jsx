import React from 'react';
import './News.css';

const News = (pops) => {
    // const news = pops.data;
    const {publishedAt, urlToImage, source, title, description, url} = pops.data;
    const date = (publishedAt).substring(0, 10)
    // console.log(news);
    return (
        <div className="news">
            <img className="thumbnail" src={urlToImage} alt="" />
            <p className="source"> <small className="source-name">{source.name}</small> <small>{date}</small> </p>
            <h3>{title}</h3>
            <p>{description}</p>
            <a className="read-more" target="_blank" href={url}>Read More</a>
        </div>
    );
};

export default News;