import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Rankings.css'

const Rankings = () => {
    const [state, setstate] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=faf990aa96f8410aadb1faf9d951d1ef')
        .then(res => res.json())
        .then(data => setstate(data.articles))
    },[])
    console.log(state)
    return (
        <div className="all-news">
                {
                state.map(news => <News data={news}></News>)
                } 
        </div>
    );
};

export default Rankings;