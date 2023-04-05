import './News.scss';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner'




const News = () =>{
    const [news, setNews] = useState()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getNewsData = async () => {
        const NEWS_API_KEY = '143e03446e904442bb4b507eeeb8408a'  
  
        try {
            console.log("Start Fetching...");
            const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${NEWS_API_KEY}`)
            setNews(data)
            console.log(data);
            setArticles(data.articles)
        } catch (error) {
            alert(error)
        }
    
    }
  

  useEffect(()=>{
    getNewsData()
  },[])

  if (isLoading) {
    return (
      <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#fff" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
    )
  }




    return (
      <div className="news-card">
         <main className="leaderboard__profiles">
         {
           articles.map((article, index) => (
             <div key={index} className="card">
                 <h2>{article?.author}</h2>
                 <p>{article?.title}</p>
             </div>
           ))
         }
       </main>
     </div>
    )
}

export default News