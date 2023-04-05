import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.scss'
import Name from './components/Name/Name'
import Links from './components/Links/Links'
import Weather from './components/Weather/Weather'
import Exchange from './components/Exchange/Exchange';
import News from  './components/News/News'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Links></Links>
          <Name></Name>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-items">
          <Weather></Weather>
        </div>
        <div className="flex-items">
          <Exchange></Exchange>
        </div>
        <div className="flex-items">
          {/* <News></News> */}
        </div>
      </div>
    </div>
  )
}

export default App
