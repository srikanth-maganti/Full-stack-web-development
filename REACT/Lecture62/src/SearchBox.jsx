import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateinfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    let API_KEY="21c441fcb4be3c723c89b8bc27b0d3ee"
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    
    async function getweatherinfo()
    {
        try{
            let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse=await response.json();
    
            let result={
                city:city,
                feels_like:jsonresponse.main.feels_like,
                humidity:jsonresponse.main.humidity,
                temp:jsonresponse.main.temp,
                temp_max:jsonresponse.main.temp_max,
                temp_min:jsonresponse.main.temp_min,
                weather:jsonresponse.weather[0].description,
    
            }
            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }
    }
    function handlecity(event)
    {
        setcity(event.target.value);
    }

   async  function handlesubmit(event)
    {   try{
        
        console.log(city);
        event.preventDefault();
        let newinfo=await getweatherinfo();
        updateinfo(newinfo);
        setcity("");
        }
        catch(err)
        {
            seterror(true);
        }

    }


    return(
        <div className="SearchBox">
            
            <form onSubmit={handlesubmit}>
            
            <TextField id="outlined-basic" label="enter city" variant="outlined" value={city} onChange={handlecity} />
            <br />
            <br />
            

            <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Send
            </Button>

            {error && <p style={{color:"red"}}>no such place in our api</p>}
        </form>
        </div>
        
    )

}