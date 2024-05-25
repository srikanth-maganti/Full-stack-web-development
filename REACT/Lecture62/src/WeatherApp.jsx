import SearchBox from './SearchBox';
import InfoBox from "./InfoBox.jsx";
import { useState } from 'react';
export default function WeatherApp()
{   let [weather,setweather]=useState({
   
        city:"delhi",
        temp:22,
        temp_max:25,
        temp_min:20,
        humidity:23,
        weather:"haze",
        feels_like:21,
       
    })
    function updateinfo(newinfo)
    {
        setweather(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weather}/>
        </div>
    )
}