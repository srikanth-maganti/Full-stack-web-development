import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info})
{  let init_img="https://images.unsplash.com/photo-1693689403076-92a02afb20e2?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_img="https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.jpg?s=1024x1024&w=is&k=20&c=-PFXMVqyKAtyRqGH8fso2CeDqzTBLWlPiE4CUp1CO_c=";
    let hot_img="https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";
    let cold_img="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=1024x1024&w=is&k=20&c=HKfUCHjK0QpLFmr1fGMLk1HuU6FALlhEHnwmexcPm0k=";
    return(
        <div className="info">
            
            <Card sx={{ maxWidth: 345 }}>

            <CardMedia
                    sx={{ height: 140 }}
                    image={info.temp<5?cold_img:(info.temp>30?hot_img:rain_img)}
                    title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                   {info.city} {info.temp<5?<AcUnitIcon/>:(info.temp>30?<WbSunnyIcon/>:<ThunderstormIcon/>)}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temparature={info.temp}</p>
                    <p>humidity={info.humidity}</p>
                    <p>max temp={info.temp_max}</p>
                    <p>min temp={info.temp_min}</p>
                    <p>the weather describes <i>{info.weather}</i>but it feels like {info.feels_like}.</p>
            </Typography>
            </CardContent>
             
        </Card>
        </div>
    )
}