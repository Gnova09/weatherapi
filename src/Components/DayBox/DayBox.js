import React from "react";
import DayCard from "./DayCard";


const DayBox =({DayData})=>{
    const CardList = DayData.map((days)=>{
    
        return(
           <DayCard 
                day={days.day}
                img={days.img}
                firtsTemp={days.firtsTemp}
                secondTemp={days.secondTemp}
            />
          
        )
    })
    return(
        <div className="DayBox">
           
            {CardList}
        </div>   
    );
} 
export default DayBox;

