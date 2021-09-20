import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Rankings.css'

const Rankings = () => {
    const [newNews, setState] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=faf990aa96f8410aadb1faf9d951d1ef')
        .then(res => res.json())
        .then(data => setState(data.articles))

        .catch((err) => {
            console.log(err);
          });
    },[])
    // console.log(newNews)
    return (
        <div className="all-news">
                {
                newNews.map(news => <News data={news} key={news.url}></News>)
                } 
        </div>
    );
};

export default Rankings;