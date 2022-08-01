import React from "react";
import DayHighCard from "./DayHighCard";
import { HighData } from "../../constant/HighLightsData";

const DayHighBox = () =>{
    
    const HighList = HighData.map((Values)=>{
        
        return(
           <DayHighCard 
                title={Values.title}
                value={Values.valor}
                unit={Values.unit}
                other={Values.other}
            />
        )
    })
    
    return(
      <div className="DayHighBox">
        <h1>TODAY HIGHLIGHTS</h1>
       <div>{HighList}</div> 
      </div>
    );
}
export default DayHighBox