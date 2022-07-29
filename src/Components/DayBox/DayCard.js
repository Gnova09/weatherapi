import React from "react";


const DayCard =({day, img, firtsTemp, secondTemp})=>{
    return(
        <div className="DayCard">
            <h1>{day}</h1>
            <div className="img-box">
                <img alt="weather" src={require(img)} />
            </div>

            <h1>
                <span>{firtsTemp}</span>
                <span>{secondTemp}</span>
            </h1>
        </div>   
    );
} 
export default DayCard