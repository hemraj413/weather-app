import React, { useState } from 'react'
import './Component.css'

const Search = ({fetchWeather}) => {
    const[city,setCity] = useState('london')

    function handleClick(){
        if(city){
            fetchWeather(city)
        }


    }
  return (
    <section className="search">
        <input type="text" placeholder='search' value={city} onChange={(e)=>setCity(e.target.value)}/>
         <button  onClick={handleClick}>
            <img src="./Assets/search.png" height={30} width={30} alt="" />
         </button>
    </section>
  )
}

export default Search