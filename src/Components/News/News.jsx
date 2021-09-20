import React from 'react';
import './News.css';

const News = (pops) => {
    // const news = pops.data;
    const {published_at, image_url, source, title, description, url} = pops.data;
    const date = (published_at).substring(0, 10)
    // console.log(news);
    return (
        <div className="news">
            <img className="thumbnail" src={image_url} alt="" />
            <p className="source"> <small className="source-name">{source}</small> <small>{date}</small> </p>
            <h3>{title}</h3>
            <p>{description}</p>
            <a className="read-more" target="_blank" href={url}>Read More</a>
        </div>
    );
};

export default News;