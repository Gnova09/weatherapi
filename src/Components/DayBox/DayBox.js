import React from "react";
import DayCard from "./DayCard";
import Scroll from "../Scroll/Scroll";
import useData from "../../Hooks/useData";


const DayBox =({DayData})=>{
    const data = useData();
    
    const CardList = DayData.map((day,ID)=>{
    
        return(
           <DayCard 
                key={ID}
                day={day.day}
                img={day.img}
                firtsTemp={day.firtsTemp}
                secondTemp={day.secondTemp}
            />
          
        )
    })
    return(
        <Scroll>
        <div className="DayBox">
            {CardList}
        </div>  
        </Scroll> 
    );
} 
export default DayBox;

