import React, { useState } from 'react'
import Search from './components/Search'
import './App.css'
import axios from 'axios'
import Main from './components/Main'

const App = () => {
  const[weatherData,setWeatherData] = useState(false)
  const[isLoading,setIsLoading] = useState(false)
  const[error,setError] = useState(null)


    const fetchData= async(city)=>{
      try{
        setIsLoading(true)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=650ff75f1b5e94fdcd19ae2fcb0f3027&units=metric`
        )
        setWeatherData(response.data)
        setError(null)
      }catch (e){
        setError(`can't find the city "${city}"`)
      }finally{
        setIsLoading(false)
      }

    }

    useState(()=>{
      fetchData("london")

    },[])


  


  return (
    <div className="container">
      <main>
      <Search fetchWeather={fetchData}/>
      {isLoading && <p className='loading'>loading...</p>}
      {error && <p className='error'>{error}</p>}
      {weatherData && <Main weather={weatherData} />}


      </main>
    </div>
  )
}

export default App