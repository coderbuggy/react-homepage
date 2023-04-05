import './Weather.scss';
import { useState, useEffect } from 'react'
import axios from 'axios';

const Weather = () =>{
    
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = async () => {
      const WEATHER_API_KEY = '13549384bec5775962d571bc256b6eba'  
      setIsLoading(true)
      try {
          console.log("Start Fetching...");
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.98679691289183&lon=29.118886262192845&appid=${WEATHER_API_KEY}&lang=tr`)
          setWeather(data)
          setIsLoading(false)
          console.log(data);
      } catch (error) {
          alert('Hata!')
      }
  }
  
  useEffect(()=>{
    getWeatherData()
  },[])

  if (isLoading) {
    return (
      <span>Loading...</span>
    )
  }
    return (
    <div>
      <div className="weather-card">
        <h2>{weather?.name}</h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
    )
}

export default Weather