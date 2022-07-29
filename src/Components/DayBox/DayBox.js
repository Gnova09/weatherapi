import React from "react";
import DayCard from "./DayCard";
import { DaysData } from "../../constant/DaysData";

const DayBox =()=>{
    const CardList = DaysData.map((day,i)=>{
        return(
            <DayCard 
            day={day[i].day}
            img={day[i].img}
            firtsTemp={day[i].firtsTemp}
            secondTemp={day[i].secondTemp}
            />
            )
    })
    return(
        <div className="DayBox">
            {CardList}
        </div>   
    );
} 
export default DayBox

