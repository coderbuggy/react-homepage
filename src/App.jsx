import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.scss'
import Name from './components/Name/Name'
import Links from './components/Links/Links'
import Weather from './components/Weather/Weather'

function App() {

  const [weather, setWeather] = useState()
  const getWeatherData = async () => {
      const WEATHER_API_KEY = '13549384bec5775962d571bc256b6eba'  

      try {
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.98679691289183&lon=29.118886262192845&appid=${WEATHER_API_KEY}`)
          setWeather(data)
          console.log(data);
      } catch (error) {
          alert('Hata!')
      }
  }

  useEffect(()=>{
      getWeatherData()
  },[])


  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Links></Links>
          {/* <Weather weather={weather}></Weather> */}
          <Name></Name>
        </div>
      </div>
    </div>
  )
}

export default App
