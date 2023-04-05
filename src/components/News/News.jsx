import './News.scss';
import { useState, useEffect } from 'react'
import axios from 'axios';

const News = () =>{
    const [news, setNews] = useState()
    const [isLoading, setIsLoading] = useState(false);

    const getNewsData = async () => {
        const NEWS_API_KEY = '143e03446e904442bb4b507eeeb8408a'  
  
        try {
            console.log("Start Fetching...");
            const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${NEWS_API_KEY}`)
            setNews(data)
            console.log(data);
        } catch (error) {
            alert(error)
        }
    
    }
  

  useEffect(()=>{
    getNewsData()
  },[])

  if (isLoading) {
    return (
      <span>Loading...</span>
    )
  }

    return (
      <div className="news-card">

     </div>
    )
}

export default News