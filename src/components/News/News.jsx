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

  
      <main class="leaderboard__profiles">
        <article class="leaderboard__profile">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
          <span class="leaderboard__name">Mark Zuckerberg</span>
          <span class="leaderboard__value">35.7<span>B</span></span>
        </article>
        <article class="leaderboard__profile">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
          <span class="leaderboard__name">Mark Zuckerberg</span>
          <span class="leaderboard__value">35.7<span>B</span></span>
        </article>
      </main>

     </div>
    )
}

export default News