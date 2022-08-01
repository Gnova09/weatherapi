import React from "react";


const DayCard =({day, img, firtsTemp, secondTemp})=>{
    
    return(
        <div className="DayCard">
                <h1>{day}</h1> 
            <div className="img-box">
                <img  src={require(`../../img/${img}.png`)} alt="weather"/> 
            </div>

             <h1 className="temp-box">
               <span>{firtsTemp}</span>
                <span>{secondTemp}</span> 
            </h1> 
        </div>   
    );
} 
export default DayCard;