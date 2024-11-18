const inputBox=document.querySelector('.input-box');
const searchbtn=document.querySelector('.search-btn');
const weather_img=document.querySelector('.weather-img');
const temp=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const locstionNot_found=document.querySelector('.locstionNotfound');
const weather_body=document.querySelector('.weather-body');
async function checkweather(city){
    const api_key="4974fd63f25dcdf7b9ef945d6c5dcf38";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(url).then(response=>
    response.json());

    if(weather_data.cod===`404`){
        locstionNot_found.style.display="flex";
        weather_body.style.display="none";
        console.log("error");
        return;
    }
    locstionNot_found.style.display="none";
    weather_body.style.display="flex";
   console.log(weather_data);
   temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
   description.innerHTML=`${weather_data.weather[0].description}`
   
   humidity.innerHTML=`${weather_data.main.humidity} %`
   wind_speed.innerHTML=`${weather_data.wind.speed }KM/h`;
   weather_img.src=`asset/${ weather_data.weather[0].main}.png`
};
searchbtn.addEventListener('click',()=>{
    if (inputBox.value) {
        checkweather(inputBox.value); 
    } else {
        alert("Please enter a location.");
    }
});