import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import WeatherApp from './WeatherApp';
// import './App.css'

function App() {
 
// function handleclick()
// {
//   console.log("button is cliked");
// }
  return (
    <>
     {/* <Button variant="contained" size="small" onClick={handleclick} startIcon={<DeleteIcon />}>del</Button>
     <Button variant="text" size="large" color="error">Contained</Button> */}


     {/* <SearchBox></SearchBox>
     <InfoBox/> */}

     <WeatherApp></WeatherApp>


    </>
  )
}

export default App
