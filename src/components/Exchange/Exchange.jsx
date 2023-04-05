import './Exchange.scss';
import { useState, useEffect } from 'react'
import { ThreeDots } from  'react-loader-spinner'

const Exchange = () =>{
  const [exchangeRateEUR, setExchangeEURRate] = useState()
  const [exchangeRateUSD, setExchangeUSDRate] = useState()
  const [isLoading, setIsLoading] = useState(false);


  const getExchangeRate = async () => {
    let myHeaders = new Headers()
    myHeaders.append('apikey', 'DD28fTrGVYTbMHArmaCirzQoI5RVS1Lj')

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    }
    setIsLoading(true);
    const responseEUR = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=EUR&amount=1", requestOptions)
    const dataEUR = await responseEUR.json()
    const responseDollar = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=USD&amount=1", requestOptions)
    const dataUSD = await responseDollar.json()
    // console.log(dataEUR, dataUSD)
    setExchangeEURRate(dataEUR)
    setExchangeUSDRate(dataUSD)
    setIsLoading(false)
    }
  

  useEffect(()=>{
      getExchangeRate()
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
      <div className="exchange-card">
        <h2><strong>EURO - </strong> {exchangeRateUSD?.result} ₺</h2>
        <h2><strong>DOLAR - </strong> {exchangeRateEUR?.result} ₺</h2>
     </div>
    )
}

export default Exchange