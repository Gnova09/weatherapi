
    const Key= "1d428f586565f70e62b1e82f8ebea597";
    
    
const WeatherAPI =(Country)=>{
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${Country}&appid=${Key}`;
        
    return url;
}
export default WeatherAPI
    
        
