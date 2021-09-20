import React from 'react';
import { useEffect, useState } from 'react';
import News from '../news/News';
import './Rankings.css'

const Rankings = () => {
    const [newses, setNewses] = useState()
    useEffect(() => {
        fetch('https://api.thenewsapi.com/v1/news/all?api_token=KOV1PRMNZxOakzJFbwZp5F2V12aMh1dknhXBWy1F')
        .then(res => res.json())
        .then(getdata => setNewses(getdata.data))
        .catch((err) => {
            console.log(err);
          });
    },[])
    const [newses2, setNewses2] = useState()
    useEffect(() => {
        fetch('https://api.thenewsapi.com/v1/news/top?api_token=KOV1PRMNZxOakzJFbwZp5F2V12aMh1dknhXBWy1F')
        .then(res => res.json())
        .then(getdata => setNewses2(getdata.data))
        .catch((err) => {
            console.log(err);
          });
    },[])
    const [newses3, setNewses3] = useState()
    useEffect(() => {
        fetch('https://api.thenewsapi.com/v1/news/similar/cc11e3ab-ced0-4a42-9146-e426505e2e67?api_token=KOV1PRMNZxOakzJFbwZp5F2V12aMh1dknhXBWy1F')
        .then(res => res.json())
        .then(getdata => setNewses3(getdata.data))
        .catch((err) => {
            console.log(err);
          });
    },[])
    // console.log(newses)
    return (
        <div className="all-news">
                {
                newses?.map(news => <News data={news} key={news.url}></News>)
                } 
                {
                newses2?.map(news => <News data={news} key={news.url}></News>)
                } 
                {
                newses3?.map(news => <News data={news} key={news.url}></News>)
                } 
        </div>
    );
};

export default Rankings;