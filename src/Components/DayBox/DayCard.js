import React from "react";


const DayCard =({day, img, firtsTemp, secondTemp, unit})=>{
    
    return(
        <div className="DayCard">
                <h1>{day}</h1> 
            <div className="img-box">
                <img  src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather"/> 
            </div>
             <h1 className="temp-box">
               <span>{firtsTemp}{unit}</span>
                <span>{secondTemp}{unit}</span> 
            </h1> 
        </div>   
    );
} 
export default DayCard;