import React from 'react';
import { useEffect, useState } from 'react';
import News from '../news/News';
import './Rankings.css';


const Rankings = () => {
    const [newses, setNewses] = useState()
    useEffect(() => {
        fetch('https://api.currentsapi.services/v1/latest-news?%27%20+%20%27language=us&apiKey=2C--5HQdFDhX5yGc0ATnnqX2BsTXYAhc2AA2fRHuiC8x44f1')
        .then(res => res.json())
        .then(data => setNewses(data.news))
    },[])
    console.log(newses)
    return (
        <div className="all-news">
                {
                newses?.map(news => <News data={news} key={news.id}></News>)
                } 
                {/* {
                newses2?.map(news => <News data={news} key={news.url}></News>)
                } 
                {
                newses3?.map(news => <News data={news} key={news.url}></News>)
                }  */}
        </div>
    );
};

export default Rankings;